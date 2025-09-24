import { useState } from "react"
import DateToggle from "../dateToggle"
import TotalsCard from "../totalsCard"
import CategoryTotalsGraph from "../Graphs/categoryTotalsGraph"
import MonthlyBalanceGraph from "../Graphs/monthlyBalanceGraph"
import WeeklyExpensesGraph from "../Graphs/weeklyExpensesGraph"

const Dashboard = () => {

    // state
    const [month, setMonth] = useState(9)

    // function runs when month is changed
    const HandleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value))
    }

    return (
        <section className="my-5">
            {/*  Page Header */}
            <div className="mb-6 flex justify-between items-center">
                <p className="text-2xl">Current Account</p>
                <DateToggle
                    HandleMonthChange={HandleMonthChange}
                    value={month}
                />
            </div>

            {/*  Totals Cards */}
            <section className="grid grid-cols-4 gap-3 text-md mb-6">
                <TotalsCard
                    title="Current Balance"
                    amount={2000}
                    styles="text-xl text-sky-600"
                />
                <TotalsCard
                    title="Total Expenses"
                    amount={1000}
                    styles="text-xl text-gray-500"
                />
                <TotalsCard
                    title="Outstanding Expenses"
                    amount={500}
                    styles="text-xl text-red-600"
                />
                <TotalsCard
                    title="Available to Spend"
                    amount={500}
                    styles="text-xl text-green-600"
                />
            </section>

            {/*  Expenses Total By Category*/}
            <CategoryTotalsGraph month={month} />

            {/*  Trend Graphs - Monthly Balance - Expenses per week*/}
            <section className="grid grid-cols-2 gap-4">
                <MonthlyBalanceGraph month={month} />
                <WeeklyExpensesGraph month={month} />
            </section>
        </section>
    )
}

export default Dashboard