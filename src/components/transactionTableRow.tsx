import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import type { TransactionType } from "../entityTypes/entityTypes";

interface PropTypes {
    transaction: TransactionType
}

export const TransactionTableRow = ({ transaction }: PropTypes) => {
    return (
        <tr className="border border-gray-400">
            <td className="border border-gray-400 py-1 text-start px-0.5 capitalize">
                {transaction.Category.name}
            </td>
            <td className="border border-gray-400 py-1 text-center px-0.5 capitalize">
                {transaction.Account.name}
            </td>
            <td className="border border-gray-400 py-1 text-center px-0.5">
                {transaction.date}
            </td>
            <td className="border border-gray-400 py-1 text-start px-0.5">
                {transaction.description}
            </td>
            <td
                className={`border border-gray-400 py-1 text-end px-0.5 ${transaction.type.Id == "100a" ? "text-red-900" : "text-green-900"}`}
            >
                {transaction.amount}
            </td>
            <td className="border-0 text-center px-0.5 flex justify-center pt-2">
                <Link to={`/expenses/addEdit/${transaction.Id}`} role="button"
                    className="me-2 cursor-pointer text-sky-700 inline"
                >
                    <FaPenToSquare />
                </Link>
                <Link to={`/expenses/delete/${transaction.Id}`} role="button"
                    className="cursor-pointer text-red-900 inline-"
                >
                    <FaTrashCan />
                </Link>
            </td>
        </tr >
    )
}
