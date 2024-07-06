import styles from "./actionBtns.module.css"

function ActionBtns() {
    return (
        <section className={styles.actionBtns}>
            <button className={styles.btn}>Update Balance</button>
            <button className={styles.btn}>Add New Expense</button>
        </section>
    )
}

export default ActionBtns