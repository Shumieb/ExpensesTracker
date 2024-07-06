import Expense from "../expense/Expense"
import styles from "./expensesList.module.css"

function ExpensesList({ myData }) {

    return (
        <section className={styles.list}>
            <ul className={styles.expensesList}>
                {
                    myData.map(expense => {
                        return <Expense expense={expense} key={expense.id} />
                    })
                }
            </ul>
        </section>
    )
}

export default ExpensesList