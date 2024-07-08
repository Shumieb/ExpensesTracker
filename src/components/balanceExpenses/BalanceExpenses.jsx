import styles from "./balanceExpenses.module.css";
import { useSelector } from 'react-redux';
import { filterByStatus } from "../../assets/utils";
import { useEffect, useState } from "react";

function BalanceExpenses({ showHideModal }) {

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