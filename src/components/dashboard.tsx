import { useState } from "react"
import DateToggle from "./UI/dateToggle"
import TotalsCard from "./UI/totalsCard"
import CategoryTotalsGraph from "./categoryTotalsGraph"

const Dashboard = () => {

    const [month, setMonth] = useState(9)



    // function runs when month is changed
    const HandleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value))
    }

    return (
        <section>
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

            <section>

            </section>

        </section>
    )
}

export default Dashboard