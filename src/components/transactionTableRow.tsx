import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";

export const TransactionTableRow = () => {
    return (
        <tr className="border border-gray-400">
            <td className="border border-gray-400 py-1 text-center px-0.5">Shopping</td>
            <td className="border border-gray-400 py-1 text-center px-0.5">Current</td>
            <td className="border border-gray-400 py-1 text-center px-0.5">12/05/2025</td>
            <td className="border border-gray-400 py-1 text-start px-0.5">Boots Shopping</td>
            <td className="border border-gray-400 py-1 text-end px-0.5">20.99</td>
            <td className="border-0 text-center px-0.5 flex justify-center pt-2">
                <Link to={`/expenses/addEdit/add`} role="button" className="me-2 cursor-pointer text-sky-700 inline">
                    <FaPenToSquare />
                </Link>
                <Link to={`/expenses/delete/1`} role="button" className="cursor-pointer text-red-700 inline-">
                    <FaTrashCan />
                </Link>
            </td>
        </tr>
    )
}
