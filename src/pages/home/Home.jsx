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
import Hero from "../../components/hero/Hero"

function Home() {

    // variables
    const [currentBalance, setCurrentBalance] = useState(0);
    const [myData, setMyData] = useState([]);
    const [displayUpdateBalanceModal, setDisplayUpdateBalanceModal] = useState(false);
    const [displayAddExpenseModal, setDisplayUpdateExpenseModal] = useState(false);
    const [displayEditExpenseModal, setDisplayEditExpenseModal] = useState(false);

    // use effect
    useEffect(() => {
        setCurrentBalance(balance);
        setMyData(expensesData);
    }, [])

    // functions
    const showHideModal = (modal, action) => {
        //console.log(modal, action);
        if (modal == "updateBalanceModal") {
            setDisplayUpdateBalanceModal(action);
        }
        if (modal == "addExpenseModal") {
            setDisplayUpdateExpenseModal(action);
        }
        if (modal == "editExpenseModal") {
            setDisplayEditExpenseModal(action);
        }
    }

    const upDateCurrentBalance = (balance) => {
        if (balance > 0) {
            setCurrentBalance(balance);
        }
    }

    return (
        <main className={styles.homeContainer}>
            <Hero title="Home" />
            <BalanceExpenses
                balance={currentBalance}
            />
            <ActionBtns
                balance={currentBalance}
                showHideModal={showHideModal}
            />
            <FilterBar />
            <ExpensesList
                myData={myData}
                showHideModal={showHideModal}
            />

            {/* Modals */}
            {
                displayUpdateBalanceModal &&
                <UpdateBalance
                    showHideModal={showHideModal}
                    currentBalance={currentBalance}
                    upDateCurrentBalance={upDateCurrentBalance}
                />
            }
            {
                displayAddExpenseModal &&
                <AddExpense
                    showHideModal={showHideModal}
                />
            }
            {
                displayEditExpenseModal &&
                <EditExpense
                    showHideModal={showHideModal}
                />
            }
        </main>
    )
}

export default Home