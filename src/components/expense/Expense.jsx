import styles from "./expense.module.css"

function Expense({ expense, showHideModal, updateExpenseToEdit, updateExpenseStatus, deleteExpense }) {


    // variables
    const paidClass = expense.status == "paid" ? styles.isPaid : '';

    // functions
    const showEditForm = () => {
        updateExpenseToEdit(expense.id);
        showHideModal("editExpenseModal", true)
    }

    return (
        <li className={`${styles.expenses} ${paidClass}`}>
            <div className={styles.expense}>
                <p className={styles.name}>{expense.name}</p>
                <p className={styles.status}>Status: {expense.status}</p>
                <p className={styles.type}>Expense Type: {expense.type}</p>
            </div>
            <div className={styles.value}>
                <p><span>£ </span>-{expense.amount}</p>
            </div>
            <div className={styles.btns}>
                <button
                    className={styles.btn}
                    disabled={expense.status == "paid"}
                    onClick={() => updateExpenseStatus(expense.id)}
                >Paid</button>
                <button
                    className={styles.btn}
                    onClick={showEditForm}
                >Edit</button>
                <button
                    className={styles.btn}
                    onClick={() => deleteExpense(expense.id)}
                >Delete</button>
            </div>
        </li>
    )
}

export default Expense