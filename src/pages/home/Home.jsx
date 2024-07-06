import { useEffect, useState } from "react"
import BalanceExpenses from "../../components/balanceExpenses/BalanceExpenses"
import ExpensesList from "../../components/expensesList/ExpensesList"
import FilterBar from "../../components/filterBar/FilterBar"
import styles from "./home.module.css"

import { balance, expensesData } from "../../assets/data"
import ActionBtns from "../../components/actionBtns/ActionBtns"
import UpdateBalance from "../../components/updateBalance/UpdateBalance"
import AddExpense from "../../components/addNewExpense/AddExpense"
import EditExpense from "../../components/editExpense/EditExpense"

function Home() {

    // variables
    const [currentBalance, setCurrentBalance] = useState(0);
    const [myData, setMyData] = useState([]);

    // use effect
    useEffect(() => {
        setCurrentBalance(balance);
        setMyData(expensesData);
    }, [])

    return (
        <main className={styles.homeContainer}>
            <BalanceExpenses balance={currentBalance} />
            <ActionBtns />
            <FilterBar />
            <ExpensesList myData={myData} />
            <UpdateBalance />
            <AddExpense />
            <EditExpense />
        </main>
    )
}

export default Home