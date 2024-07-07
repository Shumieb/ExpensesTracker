import styles from "./balanceExpenses.module.css"

function BalanceExpenses({ balance, outstandingBalance, paidBalance }) {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div className={styles.card}>
                    <p className={styles.title}>Current Balance</p>
                    <p className={styles.body}><span>£</span> {balance}</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.title}>Balance After <br /> All Expenses </p>
                    <p className={styles.body}><span>£</span> {balance - outstandingBalance}</p>
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