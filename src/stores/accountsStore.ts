import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { AccountType } from '../entityTypes/entityTypes';
import { accountsData } from '../mockData/MockData';

const useAccountsStore = create(
    combine(
        { accounts: [] as AccountType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeAccounts: () => {
                set({ accounts: accountsData });
                return accountsData
            },

            //Function to get category by Id
            getAccountById: (id: string) => {
                return useAccountsStore.getState().accounts
                    .find((account: AccountType) => account.Id === id);
            },


        })),
)

export default useAccountsStore;