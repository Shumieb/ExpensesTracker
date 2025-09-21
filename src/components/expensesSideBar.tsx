import { Link, useLocation } from "react-router"
import img from "../assets/imgs/placeholder2.jpg"

const ExpensesSideBar = () => {

    let location = useLocation()

    return (
        <section className="w-[20%] bg-white rounded-lg text-center py-6 px-2">
            <section className="px-2 py-2">
                <img src={img} alt="user-img"
                    className="rounded-full mx-auto w-30 h-30 object-fill"
                />
                <p className="mt-3 text-lg">User Name</p>
            </section>
            <div className="bg-sky-200 py-0.5 rounded-2xl my-8"></div>
            <section>
                <ul>
                    <li className="mb-6">
                        <Link
                            to="/expenses"
                            className={(location.pathname == "/expenses") ?
                                "expenses-link-active" :
                                "expenses-link-inactive"
                            }
                        >Dashboard</Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/expenses/transactions"
                            className={(location.pathname == "/expenses/transactions") ?
                                "expenses-link-active" :
                                "expenses-link-inactive"
                            }
                        >Transactions</Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/expenses/profile"
                            className={(location.pathname == "/expenses/profile") ?
                                "expenses-link-active" :
                                "expenses-link-inactive"
                            }
                        >Profile</Link>
                    </li>
                </ul>
            </section>
            <div className="bg-sky-200 py-0.5 rounded-2xl my-8"></div>
        </section>
    )
}

export default ExpensesSideBar