import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { Status } from '../../entityTypes/entityTypes';
import { getAllStatus } from '../../clients/supabaseClient';

const useStatusStore = create(
    combine(
        { status: [] as Status[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeStatus: async () => {
                if (useStatusStore.getState().status.length < 1) {
                    // get data from database
                    let data = await getAllStatus()
                    if (data) {
                        // set state
                        set({ status: data });
                        return data
                    }
                } else {
                    // return state data
                    return useStatusStore.getState().status
                }
            },

            //Function to get status by Id
            getStatusById: (id: number) => {
                return useStatusStore.getState().status
                    .find((status: Status) => status.id === id);
            },


        })),
)

export default useStatusStore;