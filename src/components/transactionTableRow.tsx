import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import type { TransactionType } from "../entityTypes/entityTypes";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/helperFunctions";

interface PropTypes {
    transaction: TransactionType
}

export const TransactionTableRow = ({ transaction }: PropTypes) => {

    const [displayDate, setDisplayDate] = useState("")

    useEffect(() => {
        let date = formatDate(transaction.dueDate)
        setDisplayDate(date)
    }, [transaction])

    return (
        <tr className={`border border-gray-400 text-lg ${transaction.StatusId == 1 ? "text-gray-400" : "text-sky-950"}`}>
            <td className="border border-b-0 border-gray-400 text-start pe-0.5 capitalize">
                <div className={`px-1 inline h-[100%] ${transaction.TypeId == 1 ? "bg-red-600" : "bg-green-600"}`}></div>
                <span className="py-1 px-1">{transaction.CategoryName}</span>
            </td>
            <td className="border border-gray-400 py-1 text-center px-0.5 capitalize">
                {transaction.FrequencyName}
            </td>
            <td className="border border-gray-400 py-1 text-center px-0.5 capitalize">
                {transaction.StatusName}
            </td>
            <td className="border border-gray-400 py-1 text-center px-0.5">
                {displayDate}
            </td>
            <td className="border border-gray-400 py-1 text-start px-0.5">
                {transaction.description}
            </td>
            <td
                className={`border border-gray-400 py-1 text-end px-0.5 ${transaction.TypeId == 1 ? "text-red-900" : "text-green-900"}`}
            >
                {transaction.amount}
            </td>
            <td className="border-0 text-center px-0.5 flex justify-center pt-2">
                <Link to={`/expenses/addEdit/${transaction.id}`} role="button"
                    className="me-2 cursor-pointer text-sky-700 inline"
                >
                    <FaPenToSquare />
                </Link>
                <Link to={`/expenses/delete/${transaction.id}`} role="button"
                    className="cursor-pointer text-red-900 inline"
                >
                    <FaTrashCan />
                </Link>
            </td>
        </tr >
    )
}
