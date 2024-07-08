import { UpdateExpenseToEdit, UpdateExpenseStatus, DeleteExpense } from "../../store/expensesSlice";
import styles from "./expense.module.css";
import { useDispatch } from 'react-redux';

function Expense({ expense, showHideModal }) {

    // values from store    
    const dispatch = useDispatch();

    // variables
    const paidClass = expense.status == "paid" ? styles.isPaid : '';

    // functions
    const showEditForm = () => {
        dispatch(UpdateExpenseToEdit(expense.id));
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
                    onClick={() => dispatch(UpdateExpenseStatus(expense.id))}
                >Paid</button>
                <button
                    className={styles.btn}
                    onClick={showEditForm}
                >Edit</button>
                <button
                    className={styles.btn}
                    onClick={() => dispatch(DeleteExpense(expense.id))}
                >Delete</button>
            </div>
        </li>
    )
}

export default Expense