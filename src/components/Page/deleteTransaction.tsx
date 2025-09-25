import { useEffect, useState } from "react"
import CancelBtn from "../UI/cancelBtn"
import SubmitBtn from "../UI/submitBtn"
import type { TransactionType } from "../../entityTypes/entityTypes"
import useTransactionsStore from "../../stores/zustand/transactionsStore"
import { useNavigate, useParams } from "react-router"

const DeleteTransaction = () => {

    // route
    let params = useParams();
    let transactionId = params.id
    const navigate = useNavigate();

    // state - transaction data
    const [transaction, setTransaction] = useState<TransactionType | null>()

    // store
    const getTransactionById = useTransactionsStore.getState().getTransactionById
    const deleteTransaction = useTransactionsStore.getState().deleteTransaction

    // useEffect - run when route changes
    useEffect(() => {
        // if route is not present redirect
        if (!transactionId) {
            navigate("/expenses/transactions")
            return
        }

        // fetch transaction data
        let transId = parseInt(transactionId)
        let trans = getTransactionById(transId)

        // runs when trans is not found
        if (!trans) {
            console.log("Failed to get transaction")
            return
        }

        // set state values
        setTransaction(trans)
    }, [transactionId])

    // submit delete
    const HandleSubmit = (e: any) => {
        // prevent auto page refresh
        e.preventDefault()
        // delete transaction
        let transId;
        if (transactionId !== undefined) transId = parseInt(transactionId)
        if (transId) deleteTransaction(transId)
        navigate("/expenses/transactions")
    }

    return (
        <section className="my-5">
            <form onSubmit={HandleSubmit}
                className={`w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg border-2 ${transaction?.TypeId == 1 ? "border-red-300" : "border-green-300"}`}
            >
                <p className="text-2xl text-center mb-6 capitalize">Delete</p>
                <p className="text-xl py-1 text-gray-800 text-center italic">Are you sure you want to delete the following transactions?</p>
                <div className="mb-8 text-center text-xl py-1 capitalize">
                    <p className={`text-2xl py-2 font-bold ${transaction?.TypeId == 1 ? "text-red-900" : "text-green-900"}`}>
                        {transaction?.TypeId}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Description:</span> {transaction?.description}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Amount:</span> {transaction?.amount}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Category:</span> {transaction?.CategoryId}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Frequency:</span> {transaction?.FrequencyId}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Account:</span> {transaction?.AccountId}
                    </p>
                    <p className="py-1">
                        <span className="text-gray-700">Status:</span> {transaction?.StatusId}
                    </p>
                    <p className="py-1">
                        {/*<span className="text-gray-700">Date:</span> {transaction.dueDate}*/}
                    </p>
                </div>

                {/* submit button */}
                <div className="flex justify-center gap-5">
                    <SubmitBtn btnText="Delete" del={true} />
                    <CancelBtn link="/expenses/transactions" />
                </div>
            </form>
        </section>
    )
}

export default DeleteTransaction