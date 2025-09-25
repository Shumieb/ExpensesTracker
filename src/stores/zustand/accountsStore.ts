import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { AccountType } from '../../entityTypes/entityTypes';
import { getAllAccounts } from '../../clients/supabaseClient';

const useAccountsStore = create(
    combine(
        { accounts: [] as AccountType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeAccounts: async () => {
                if (useAccountsStore.getState().accounts.length < 1) {
                    // get data from database
                    let data = await getAllAccounts()
                    if (data) {
                        // set state
                        set({ accounts: data });
                        return data
                    }
                } else {
                    // return state data
                    return useAccountsStore.getState().accounts
                }
            },

            //Function to get category by Id
            getAccountById: (id: number) => {
                return useAccountsStore.getState().accounts
                    .find((account: AccountType) => account.id === id);
            },

        })),
)

export default useAccountsStore;