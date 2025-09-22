import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { FrequencyType } from '../entityTypes/entityTypes';
import { frequencyData } from '../mockData/MockData';

const useFrequenciesStore = create(
    combine(
        { frequencies: [] as FrequencyType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeFrequencies: () => {
                set({ frequencies: frequencyData });
                return frequencyData
            },

            //Function to get category by Id
            getFrequencyById: (id: string) => {
                return useFrequenciesStore.getState().frequencies
                    .find((frequency: FrequencyType) => frequency.Id === id);
            },


        })),
)

export default useFrequenciesStore;