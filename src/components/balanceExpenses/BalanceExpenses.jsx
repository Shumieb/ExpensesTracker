import styles from "./balanceExpenses.module.css"

function BalanceExpenses({ balance }) {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>Current Balance</p>
                <p className={styles.body}><span>£</span> {balance}</p>
            </div>
            <div className={styles.card}>
                <p className={styles.title}>Outstanding Expenses</p>
                <p className={styles.body}><span>£</span> -2,000</p>
            </div>
            <div className={styles.card}>
                <p className={styles.title}>Paid Expenses</p>
                <p className={styles.body}><span>£</span> -3,000</p>
            </div>
        </section>
    )
}

export default BalanceExpenses