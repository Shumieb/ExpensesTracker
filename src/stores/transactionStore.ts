import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { TransactionType } from '../entityTypes/entityTypes';
import { transactionData } from '../mockData/MockData';

const useTransactionsStore = create(
    combine(
        { transactions: [] as TransactionType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeTransactions: () => {
                set({ transactions: transactionData });
                return transactionData
            },

            //Function to get transaction by Id
            getTransactionById: (id: string) => {
                return useTransactionsStore.getState().transactions
                    .find((transaction: TransactionType) => transaction.Id === id);
            },

            // Function to add new transaction
            addTransaction: (newTransaction: TransactionType) => {
                set((state) => ({
                    transactions: [...state.transactions, newTransaction]
                }))
            },

            // Function to update a transaction
            updateTransaction: (id: string, newTransaction: TransactionType) => {
                set((state) => ({
                    transactions: state.transactions.map((transaction: TransactionType) =>
                        transaction.Id == id ? newTransaction : transaction
                    )
                }))
            }
        })),
)

export default useTransactionsStore;