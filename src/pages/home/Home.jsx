import { useState } from "react";
import styles from "./home.module.css";
import BalanceExpenses from "../../components/balanceExpenses/BalanceExpenses";
import ExpensesList from "../../components/expensesList/ExpensesList";
import UpdateBalance from "../../components/updateBalance/UpdateBalance";
import AddExpense from "../../components/addNewExpense/AddExpense";
import EditExpense from "../../components/editExpense/EditExpense";
import Hero from "../../components/hero/Hero";
import { useDispatch } from 'react-redux';

function Home() {

    // values from state
    const dispatch = useDispatch();

    // variables
    const [displayUpdateBalanceModal, setDisplayUpdateBalanceModal] = useState(false);
    const [displayAddExpenseModal, setDisplayUpdateExpenseModal] = useState(false);
    const [displayEditExpenseModal, setDisplayEditExpenseModal] = useState(false);

    // use effect


    // functions
    const showHideModal = (modal, action) => {
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

    return (
        <main className={styles.homeContainer}>
            <Hero title="Expenses Tracker" />
            <BalanceExpenses showHideModal={showHideModal} />
            <ExpensesList showHideModal={showHideModal} />

            {/* Modals */}
            {
                displayUpdateBalanceModal && <UpdateBalance showHideModal={showHideModal} />
            }
            {
                displayAddExpenseModal &&
                <AddExpense showHideModal={showHideModal} />
            }
            {
                displayEditExpenseModal &&
                <EditExpense showHideModal={showHideModal} />
            }
        </main>
    )
}

export default Home