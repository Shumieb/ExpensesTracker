import { useEffect, useState } from "react"
import DateToggle from "../dateToggle"
import TotalsCard from "../totalsCard"
import CategoryTotalsGraph from "../Graphs/categoryTotalsGraph"
import MonthlyBalanceGraph from "../Graphs/monthlyBalanceGraph"
import WeeklyExpensesGraph from "../Graphs/weeklyExpensesGraph"
import type { TransactionType } from "../../entityTypes/entityTypes"
import useTransactionsStore from "../../stores/zustand/transactionsStore"

const Dashboard = () => {

    // state
    const [month, setMonth] = useState(9)
    const [transactionData, setTransactionData] = useState<TransactionType[] | undefined>()
    const [currentBalance, setCurrentBalance] = useState<number | undefined>()
    const [totalExpenses, setTotalExpenses] = useState<number | undefined>()
    const [outstandingExpenses, setOutstandingExpenses] = useState<number | undefined>()
    const [availableBalance, setAvailableBalance] = useState<number | undefined>()

    //stores
    // transaction store
    const getTransactionData = useTransactionsStore.getState().initializeTransactions
    const transactionsStoreData = useTransactionsStore.getState().transactions

    useEffect(() => {
        // set date
        let thisMonth = new Date().getMonth()
        setMonth(thisMonth + 1)
        // get data
        getTransData()

    }, [transactionsStoreData])

    useEffect(() => {
        if (!transactionData) return
        // set current balance
        let cBalance = getCurrentBalance(transactionData)
        setCurrentBalance(cBalance)
        // set total expenses
        let expenseTotal = getTotalExpenses(transactionData)
        setTotalExpenses(expenseTotal)
        // set outstandind expenses
        let outstandingExpense = getOutstandingExpenses(transactionData)
        setOutstandingExpenses(outstandingExpense)
        // set available to spend
        let available = cBalance - outstandingExpense
        setAvailableBalance(available)

    }, [transactionData])

    // get trans data
    const getTransData = async () => {
        if (transactionsStoreData.length < 1) {
            let data = await getTransactionData()
            if (data) {
                let monthlyData = getMonthlyData(data)
                setTransactionData(monthlyData)
            }
        } else {
            let monthlyData = getMonthlyData(transactionsStoreData)
            setTransactionData(monthlyData)
        }
    }

    // get monthly data
    const getMonthlyData = (data: TransactionType[]) => {
        let monthlyData: TransactionType[] = []
        data.forEach(transaction => {
            if (transaction.FrequencyId == 2) {
                monthlyData.push(transaction)
            } else if (transaction.FrequencyId != 2) {
                let monthArray = transaction.dueDate.split("-")
                let transMonth = monthArray[1]
                if (parseInt(transMonth) == month) {
                    monthlyData.push(transaction)
                }
            }
        })
        return monthlyData
    }

    // get balance
    const getCurrentBalance = (data: TransactionType[]) => {
        return data.reduce((n, { amount }) => n + amount, 0)
    }

    // get total expenses
    const getTotalExpenses = (data: TransactionType[]) => {
        let totalExpense = 0
        data.forEach(d => {
            if (d.TypeId == 1) {
                totalExpense += d.amount
            }
        })
        return totalExpense
    }

    // get outstanding expenses
    const getOutstandingExpenses = (data: TransactionType[]) => {
        let outstandingExpense = 0
        data.forEach(d => {
            if (d.TypeId == 1 && d.StatusId == 2) {
                outstandingExpense += d.amount
            }
        })
        return outstandingExpense
    }

    // function runs when month is changed
    const HandleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value))
    }

    return (
        <section className="my-5">
            {/*  Page Header */}
            <div className="mb-6 flex justify-between items-center">
                <p className="text-2xl text-sky-900">Current Account</p>
                <DateToggle
                    HandleMonthChange={HandleMonthChange}
                    value={month}
                />
            </div>
            {/*  Totals Cards */}
            <section className="grid grid-cols-4 gap-3 text-md mb-6">
                <TotalsCard
                    title="Current Balance"
                    amount={currentBalance}
                    styles="text-xl text-sky-600"
                    borderStyle="border-sky-300"
                />
                <TotalsCard
                    title="Total Expenses"
                    amount={totalExpenses}
                    styles="text-xl text-gray-600"
                    borderStyle="border-gray-300"
                />
                <TotalsCard
                    title="Outstanding Expenses"
                    amount={outstandingExpenses}
                    styles="text-xl text-red-600"
                    borderStyle="border-red-300"
                />
                <TotalsCard
                    title="Available to Spend"
                    amount={availableBalance}
                    styles="text-xl text-green-600"
                    borderStyle="border-green-300"
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