import { useEffect, useState } from "react"
import { TransactionTableRow } from "./transactionTableRow"
import { type TransactionType } from "../entityTypes/entityTypes"
import useTransactionsStore from "../stores/zustand/transactionsStore"


const TransactionTable = () => {

    // state
    const [transactionsData, setTransactionsData] = useState<TransactionType[]>([])

    //stores
    // transaction store
    const getTransactionData = useTransactionsStore.getState().initializeTransactions
    const transactionsStoreData = useTransactionsStore.getState().transactions

    // initialise
    useEffect(() => {
        // get data
        getTransData()
    }, [])

    // get trans data
    const getTransData = async () => {
        if (transactionsStoreData.length < 1) {
            let transactions = await getTransactionData()
            if (transactions) setTransactionsData(transactions)
        } else {
            setTransactionsData(transactionsStoreData)
        }
    }

    return (
        <table className="table-auto border-collapse my-4 border border-gray-400 w-[100%]">
            <thead>
                <tr className="text-center text-lg bg-sky-900 text-white">
                    <th className="border border-gray-400 py-1">Category</th>
                    <th className="border border-gray-400 py-1">Frequency</th>
                    <th className="border border-gray-400 py-1">Status</th>
                    <th className="border border-gray-400 py-1">Due Date</th>
                    <th className="border border-gray-400 py-1">Description</th>
                    <th className="border border-gray-400 py-1">Amount</th>
                    <th className="border border-gray-400 py-1"></th>
                </tr>
            </thead>
            <tbody className="">
                {
                    transactionsData && transactionsData.map(transaction => {
                        return (
                            <TransactionTableRow
                                transaction={transaction}
                                key={transaction.id}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TransactionTable