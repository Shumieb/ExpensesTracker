import { useEffect, useState } from "react"
import styles from "./actionBtns.module.css"

function ActionBtns({ balance, showHideModal }) {

    // variables
    const [currentBalance, setCurrentBalance] = useState(0);

    // use effect
    useEffect(() => {
        setCurrentBalance(balance);
    }, [balance])

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