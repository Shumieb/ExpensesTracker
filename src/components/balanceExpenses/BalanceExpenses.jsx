import styles from "./balanceExpenses.module.css";
import { useSelector } from 'react-redux';
import { filterByStatus } from "../../assets/utils";
import { useEffect, useState } from "react";

function BalanceExpenses() {

    // values from store
    const currentBalance = useSelector((state) => state.expenses.balance);
    const expensesData = useSelector((state) => state.expenses.expensesData);

    // variables
    const [outstandingBalance, setOutstandingBalance] = useState(0);
    const [paidBalance, setPaidBalance] = useState(0);

    // useEffect
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
            <div className={styles.top}>
                <div className={styles.card}>
                    <p className={styles.title}>Current Balance</p>
                    <p className={styles.body}><span>£</span> {currentBalance}</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.title}>Balance After <br /> All Expenses </p>
                    <p className={styles.body}><span>£</span> {currentBalance - outstandingBalance}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.card}>
                    <p className={styles.title}>Outstanding Expenses<br /> Total</p>
                    <p className={styles.body}><span>£</span> -{outstandingBalance}</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.title}>Paid Expenses<br /> Total</p>
                    <p className={styles.body}><span>£</span> -{paidBalance}</p>
                </div>
            </div>
        </section>
    )
}

export default BalanceExpenses