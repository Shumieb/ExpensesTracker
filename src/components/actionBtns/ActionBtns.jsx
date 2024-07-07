import styles from "./actionBtns.module.css"

function ActionBtns({ showHideModal }) {

    return (
        <section className={styles.actionBtns}>
            <button className={styles.btn}
                onClick={() => showHideModal("updateBalanceModal", true)}
            >Update Balance</button>
            <button className={styles.btn}
                onClick={() => showHideModal("addExpenseModal", true)}
            >Add New Expense</button>
        </section>
    )
}

export default ActionBtns