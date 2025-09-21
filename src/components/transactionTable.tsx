import { TransactionTableRow } from "./transactionTableRow"

const TransactionTable = () => {

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
                <TransactionTableRow />
                <TransactionTableRow />
                <TransactionTableRow />
                <TransactionTableRow />
                <TransactionTableRow />
            </tbody>
        </table>
    )
}

export default TransactionTable