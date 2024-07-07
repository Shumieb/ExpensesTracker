import Expense from "../expense/Expense"
import styles from "./expensesList.module.css"

function ExpensesList({ myData, showHideModal, updateExpenseToEdit, updateExpenseStatus, deleteExpense }) {
    return (
        <section className={styles.list}>
            <ul className={styles.expensesList}>
                {
                    myData.map(expense => {
                        return <Expense
                            expense={expense}
                            key={expense.id}
                            showHideModal={showHideModal}
                            updateExpenseToEdit={updateExpenseToEdit}
                            updateExpenseStatus={updateExpenseStatus}
                            deleteExpense={deleteExpense}
                        />
                    })
                }
            </ul>
        </section>
    )
}

export default ExpensesList