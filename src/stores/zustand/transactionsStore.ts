import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { TransactionType } from '../../entityTypes/entityTypes';
import { getAllTransactions } from '../../clients/supabaseClient';

const useTransactionsStore = create(
    combine(
        { transactions: [] as TransactionType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeTransactions: async () => {
                if (useTransactionsStore.getState().transactions.length < 1) {
                    // get data from database
                    let data = await getAllTransactions()
                    if (data) {
                        // set state
                        set({ transactions: data });
                        return data
                    }
                } else {
                    // return state data
                    return useTransactionsStore.getState().transactions
                }
            },

            //Function to get transaction by Id
            getTransactionById: (id: number) => {
                return useTransactionsStore.getState().transactions
                    .find((transaction: TransactionType) => transaction.id === id);
            },

            // Function to add new transaction
            addTransaction: (newTransaction: TransactionType) => {
                set((state) => ({
                    transactions: [...state.transactions, newTransaction]
                }))
            },

            // Function to update a transaction
            updateTransaction: (id: number, newTransaction: TransactionType) => {
                set((state) => ({
                    transactions: state.transactions.map((transaction: TransactionType) =>
                        transaction.id == id ? newTransaction : transaction
                    )
                }))
            },

            // Function to delete a transaction
            deleteTransaction: (id: number) => {
                set((state) => ({
                    transactions: state.transactions.filter((transaction: TransactionType) =>
                        transaction.id != id
                    )
                }))
            },



        })),//end
)

export default useTransactionsStore;