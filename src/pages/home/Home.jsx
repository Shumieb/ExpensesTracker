import { useEffect, useState } from "react";
import styles from "./home.module.css";
import BalanceExpenses from "../../components/balanceExpenses/BalanceExpenses";
import ExpensesList from "../../components/expensesList/ExpensesList";
import FilterBar from "../../components/filterBar/FilterBar";
import { balance, expensesData } from "../../assets/data";
import ActionBtns from "../../components/actionBtns/ActionBtns";
import UpdateBalance from "../../components/updateBalance/UpdateBalance";
import AddExpense from "../../components/addNewExpense/AddExpense";
import EditExpense from "../../components/editExpense/EditExpense";
import Hero from "../../components/hero/Hero";

function Home() {

    // variables
    const [currentBalance, setCurrentBalance] = useState(0);
    const [outstandingBalance, setOutstandingBalance] = useState(0);
    const [paidBalance, setPaidBalance] = useState(0);
    const [myData, setMyData] = useState([]);
    const [displayUpdateBalanceModal, setDisplayUpdateBalanceModal] = useState(false);
    const [displayAddExpenseModal, setDisplayUpdateExpenseModal] = useState(false);
    const [displayEditExpenseModal, setDisplayEditExpenseModal] = useState(false);
    const [expenseToEdit, setExpenseToEdit] = useState({});
    const [selectedFilterType, setSelectedFilterType] = useState("All");
    const [selectedFilterStatus, setSelectedFilterStatus] = useState("all");

    // use effect
    useEffect(() => {
        setCurrentBalance(balance);
        setMyData(expensesData);
    }, [])

    useEffect(() => {
        let filteredOustandingData = filterByStatus("outstanding");
        let filteredOutstandingBalance = filteredOustandingData.reduce(function (acc, expense) { return acc + expense.amount; }, 0);
        setOutstandingBalance(filteredOutstandingBalance);

        let paidData = filterByStatus("paid");
        let filteredPaidBalance = paidData.reduce(function (acc, expense) { return acc + expense.amount; }, 0);
        setPaidBalance(filteredPaidBalance);
    }, [myData])

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

    const updateCurrentBalance = (balance) => {
        if (balance > 0) {
            setCurrentBalance(balance);
        }
    }

    const AddNewExpense = (newExpense) => {
        setMyData(oldArray => [newExpense, ...oldArray]);
    }

    const updateExpenseToEdit = (id) => {
        let newExpenseToEdit = myData.find(expense => expense.id == id);
        setExpenseToEdit(newExpenseToEdit);
    }

    const UpdateExpense = (editedExpense) => {
        setMyData(myData.map(expense => {
            if (expense.id === editedExpense.id) {
                return { ...editedExpense };
            } else {
                return expense;
            }
        }));
    }

    const updateExpenseStatus = (id) => {
        setMyData(myData.map(expense => {
            if (expense.id === id) {
                return { ...expense, "status": "paid" };
            } else {
                return expense;
            }
        }));
    }

    const deleteExpense = (id) => {
        setMyData(
            myData.filter(expense =>
                expense.id !== id
            )
        );
    }

    const filterByStatus = (value) => {
        let filteredData = myData.filter(expense => expense.status == value);
        return filteredData;
    }

    const updateFilterType = (value) => {
        setSelectedFilterType(value);
    }

    const updateFilterStatus = (value) => {
        setSelectedFilterStatus(value);
    }

    return (
        <main className={styles.homeContainer}>
            <Hero title="Home" />
            <BalanceExpenses
                balance={currentBalance}
                outstandingBalance={outstandingBalance}
                paidBalance={paidBalance}
            />
            <ActionBtns showHideModal={showHideModal} />
            <FilterBar
                selectedFilterType={selectedFilterType}
                updateFilterType={updateFilterType}
                selectedFilterStatus={selectedFilterStatus}
                updateFilterStatus={updateFilterStatus}
            />
            <ExpensesList
                myData={myData}
                showHideModal={showHideModal}
                updateExpenseToEdit={updateExpenseToEdit}
                updateExpenseStatus={updateExpenseStatus}
                deleteExpense={deleteExpense}
                selectedFilterType={selectedFilterType}
                selectedFilterStatus={selectedFilterStatus}
                filterByStatus={filterByStatus}
            />

            {/* Modals */}
            {
                displayUpdateBalanceModal &&
                <UpdateBalance
                    showHideModal={showHideModal}
                    currentBalance={currentBalance}
                    updateCurrentBalance={updateCurrentBalance}
                />
            }
            {
                displayAddExpenseModal &&
                <AddExpense
                    showHideModal={showHideModal}
                    AddNewExpense={AddNewExpense}
                />
            }
            {
                displayEditExpenseModal &&
                <EditExpense
                    showHideModal={showHideModal}
                    expenseToEdit={expenseToEdit}
                    UpdateExpense={UpdateExpense}
                />
            }
        </main>
    )
}

export default Home