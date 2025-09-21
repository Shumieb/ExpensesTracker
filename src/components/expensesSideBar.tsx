import { Link } from "react-router"

const ExpensesSideBar = () => {
    return (
        <section className="w-[20%] bg-white rounded-lg text-center py-6 px-2">
            <section>
                <p>user image</p>
                <p>User Name</p>
            </section>
            <div className="bg-gray-500 py-0.5 rounded-2xl my-4"></div>
            <section>
                <ul>
                    <li>
                        <Link to="/expenses/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/expenses/transactions">Transactions</Link>
                    </li>
                    <li>
                        <Link to="/expenses/profile">Profile</Link>
                    </li>
                </ul>
            </section>
            <div className="bg-gray-500 py-0.5 rounded-2xl my-4"></div>
        </section>
    )
}

export default ExpensesSideBar