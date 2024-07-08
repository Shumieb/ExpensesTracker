import { useEffect, useState } from "react";
import styles from "./home.module.css";
import BalanceExpenses from "../../components/balanceExpenses/BalanceExpenses";
import ExpensesList from "../../components/expensesList/ExpensesList";
import FilterBar from "../../components/filterBar/FilterBar";
import { expensesData } from "../../assets/data";
import ActionBtns from "../../components/actionBtns/ActionBtns";
import UpdateBalance from "../../components/updateBalance/UpdateBalance";
import AddExpense from "../../components/addNewExpense/AddExpense";
import EditExpense from "../../components/editExpense/EditExpense";
import Hero from "../../components/hero/Hero";

import { useDispatch } from 'react-redux';
import { InitialExpenses } from "../../store/expensesSlice";

function Home() {

    // values from state
    const dispatch = useDispatch();

    // variables
    const [displayUpdateBalanceModal, setDisplayUpdateBalanceModal] = useState(false);
    const [displayAddExpenseModal, setDisplayUpdateExpenseModal] = useState(false);
    const [displayEditExpenseModal, setDisplayEditExpenseModal] = useState(false);

    // use effect
    useEffect(() => {
        dispatch(InitialExpenses(expensesData))
    }, [])

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
            <Hero title="Home" />
            <BalanceExpenses />
            <ActionBtns showHideModal={showHideModal} />
            <FilterBar />
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