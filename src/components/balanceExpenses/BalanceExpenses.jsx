import styles from "./balanceExpenses.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { filterByStatus } from "../../assets/utils";
import { useEffect, useState } from "react";
import { UpdateCurrentBalance } from "../../store/expensesSlice";
import { balance } from "../../assets/data";

function BalanceExpenses({ showHideModal }) {

    // values from store 
    const storeBalance = useSelector((state) => state.expenses.balance);
    const expensesData = useSelector((state) => state.expenses.expensesData);
    const dispatch = useDispatch()

    // variables
    const [outstandingBalance, setOutstandingBalance] = useState(0);
    const [paidBalance, setPaidBalance] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [init, setInit] = useState(true);

    // useEffect
    useEffect(() => {
        // get data from local storage
        let storedBalance = localStorage.getItem("BalanceExpenses");

        if (!storedBalance) {
            localStorage.setItem("BalanceExpenses", JSON.stringify(balance));
            dispatch(UpdateCurrentBalance(balance));
        } else {
            console.log("data present", storedBalance);
            console.log(typeof (Number(storedBalance)));
            dispatch(UpdateCurrentBalance(Number(storedBalance)));
        }
        setInit(false);

    }, [])

    useEffect(() => {
        setCurrentBalance(storeBalance);
        if (!init) {
            localStorage.setItem("BalanceExpenses", JSON.stringify(storeBalance));
        }
    }, [storeBalance])

    useEffect(() => {
        let filteredOustandingData = filterByStatus("outstanding", expensesData);
        let filteredOutstandingBalance = filteredOustandingData.reduce(function (acc, expense) { return acc + expense.amount; }, 0);
        setOutstandingBalance(filteredOutstandingBalance);

        let paidData = filterByStatus("paid", expensesData);
        let filteredPaidBalance = paidData.reduce(function (acc, expense) { return acc + expense.amount; }, 0);
        setPaidBalance(filteredPaidBalance);
    }, [expensesData])

    return (
        <section className={styles.container}>
            <div className={styles.cards}>
                <div className={`${styles.card} ${styles.balance}`}>
                    <p className={styles.title}>Current Balance</p>
                    <p className={styles.body}><span>£</span> {currentBalance}</p>
                    <button className={styles.btn}
                        onClick={() => showHideModal("updateBalanceModal", true)}
                    >Update Balance</button>
                </div>
                <div className={`${styles.card} ${styles.expenses}`}>
                    <div className={styles.expense}>
                        <p className={styles.title}>Outstanding Expenses Total <span>£ -{outstandingBalance}</span></p>
                    </div>
                    <div className={styles.expense}>
                        <p className={styles.title}>Paid Expenses Total <span>£ -{paidBalance}</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BalanceExpenses