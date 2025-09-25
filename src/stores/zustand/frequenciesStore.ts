import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { FrequencyType } from '../../entityTypes/entityTypes';
import { getAllFrequencies } from '../../clients/supabaseClient';

const useFrequenciesStore = create(
    combine(
        { frequencies: [] as FrequencyType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeFrequencies: async () => {
                if (useFrequenciesStore.getState().frequencies.length < 1) {
                    // get data from database
                    let data = await getAllFrequencies()
                    if (data) {
                        // set state
                        set({ frequencies: data });
                        return data
                    }
                } else {
                    // return state data
                    return useFrequenciesStore.getState().frequencies
                }
            },

            //Function to get category by Id
            getFrequencyById: (id: number) => {
                return useFrequenciesStore.getState().frequencies
                    .find((frequency: FrequencyType) => frequency.id === id);
            },

        })),
)

export default useFrequenciesStore;