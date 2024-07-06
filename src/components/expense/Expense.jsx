import styles from "./expense.module.css"

function Expense({ expense }) {
    return (
        <li className={styles.expenses}>
            <div className={styles.expense}>
                <p className={styles.name}>{expense.name}</p>
                <p className={styles.status}>Status: {expense.status}</p>
                <p className={styles.type}>Expense Type: {expense.type}</p>
            </div>
            <div className={styles.value}>
                <p><span>£ </span>-{expense.amount}</p>
            </div>
            <div className={styles.btns}>
                <button className={styles.btn}>Paid</button>
                <button className={styles.btn}>Edit</button>
                <button className={styles.btn}>Delete</button>
            </div>
        </li>
    )
}

export default Expense