import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { TypeOfTransaction } from '../entityTypes/entityTypes';
import { typeOfTransaction } from '../mockData/MockData';

const useTransactionTypesStore = create(
    combine(
        { types: [] as TypeOfTransaction[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeTypes: () => {
                set({ types: typeOfTransaction });
                return typeOfTransaction
            },

            //Function to get category by Id
            getAccountById: (id: string) => {
                return useTransactionTypesStore.getState().types
                    .find((type: TypeOfTransaction) => type.Id === id);
            },


        })),
)

export default useTransactionTypesStore;