import Expense from "../expense/Expense"
import styles from "./expensesList.module.css"

function ExpensesList({ myData, showHideModal }) {

    return (
        <section className={styles.list}>
            <ul className={styles.expensesList}>
                {
                    myData.map(expense => {
                        return <Expense expense={expense} key={expense.id} showHideModal={showHideModal} />
                    })
                }
            </ul>
        </section>
    )
}

export default ExpensesList