import { useEffect, useState } from "react"
import { TransactionTableRow } from "./transactionTableRow"
import type { TransactionType } from "../entityTypes/entityTypes"
import useTransactionsStore from "../stores/transactionStore"

const TransactionTable = () => {

    // state
    const [transactionsData, setTransactionsData] = useState<TransactionType[]>([])

    //stores
    const storeTransactionData = useTransactionsStore((state) => state.initializeTransactions)

    // initialise
    useEffect(() => {
        let transactions = storeTransactionData()
        //console.log(transactions)
        setTransactionsData(transactions)

    }, [])

    return (
        <table className="my-4 border border-gray-400 w-[100%]">
            <thead>
                <tr className="text-center bg-sky-900 text-white">
                    <th className="border border-gray-400 py-1">Category</th>
                    <th className="border border-gray-400 py-1">Account</th>
                    <th className="border border-gray-400 py-1">Date</th>
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
                                key={transaction.Id}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TransactionTable