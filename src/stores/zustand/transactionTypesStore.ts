import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { TypeOfTransaction } from '../../entityTypes/entityTypes';
import { getAllTypes } from '../../clients/supabaseClient';

const useTransactionTypesStore = create(
    combine(
        { types: [] as TypeOfTransaction[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeTypes: async () => {
                if (useTransactionTypesStore.getState().types.length < 1) {
                    // get data from database
                    let data = await getAllTypes()
                    if (data) {
                        // set state
                        set({ types: data });
                        return data
                    }
                } else {
                    // return state data
                    return useTransactionTypesStore.getState().types
                }
            },

            //Function to get category by Id
            getTypesById: (id: number) => {
                return useTransactionTypesStore.getState().types
                    .find((type: TypeOfTransaction) => type.id === id);
            },


        })),
)

export default useTransactionTypesStore;