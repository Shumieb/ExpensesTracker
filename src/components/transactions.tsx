import { Link } from "react-router"
import TransactionTable from "./transactionTable"

const Transactions = () => {

    return (
        <section className="">
            <section className=" bg-white py-6 px-3 rounded-lg min-h-[80vh]">
                <p className="text-2xl capitalize mb-6">All Transactions</p>
                <div className="mb-6 text-end">
                    <Link to="/expenses/addEdit/add"
                        className="bg-sky-900 text-white py-3 px-6 text-lg rounded-md"
                    >
                        Add Transaction
                    </Link>
                </div>
                <TransactionTable />
            </section>
        </section>
    )
}

export default Transactions