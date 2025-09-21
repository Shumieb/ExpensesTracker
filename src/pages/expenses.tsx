import { Outlet } from "react-router"
import ExpensesSideBar from "../components/expensesSideBar"

const Expenses = () => {
    return (
        <main className="flex gap-3 w-[80%] mx-auto min-h-[75vh]">
            <ExpensesSideBar />
            <section className="w-[80%]">
                <Outlet />
            </section>
        </main>
    )
}

export default Expenses