import { useState } from "react";
import styles from "./editExpense.module.css";
import { expenseTypes } from "../../assets/data";
import { checkType } from "../../assets/utils";

function EditExpense({ showHideModal, expenseToEdit, UpdateExpense }) {

    // variable
    const [editName, setEditName] = useState(expenseToEdit.name);
    const [editAmount, setEditAmount] = useState(expenseToEdit.amount);
    const [editType, setEditType] = useState(expenseToEdit.type);
    const [editStatus, setEditStatus] = useState(expenseToEdit.status);
    const [error, setError] = useState("");
    const [displayError, setDisplayError] = useState(false);

    // function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editName != "") {
            if (editAmount != 0) {
                if (editType != "default") {
                    let validType = checkType(expenseTypes, editType);

                    if (validType) {
                        let editedExpense = {
                            "id": expenseToEdit.id,
                            "name": editName,
                            "status": editStatus,
                            "type": editType,
                            "amount": editAmount
                        }

                        UpdateExpense(editedExpense);
                        showHideModal("editExpenseModal", false)
                    }
                } else {
                    setError("Please select a valid type.");
                    setDisplayError(true);
                }
            } else {
                setError("Please enter an amount greater than 0.");
                setDisplayError(true);
            }
        } else {
            setError("Please enter an expense name.");
            setDisplayError(true);
        }
    }

    const removeErrorMsg = () => {
        if (error != "" || !displayError) {
            setError("");
            setDisplayError(false);
        }
    }

    return (
        <section className={styles.modal}>
            <form className={styles.modalContent} onSubmit={(e) => handleSubmit(e)}>
                <span
                    className={styles.close}
                    onClick={() => showHideModal("editExpenseModal", false)}
                >&times;</span>
                <h2 className={styles.header}>Edit Expense</h2>
                <span className={styles.hr}><hr /></span>
                <div>
                    <label htmlFor="name">Expense: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className={styles.modalInput}
                        autoComplete="off"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onFocus={removeErrorMsg}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount: </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        className={styles.modalInput}
                        autoComplete="off"
                        min={0}
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        onFocus={removeErrorMsg}
                    />
                </div>
                <div className={styles.typeSelect}>
                    <p>Expense Type: </p>
                    <select
                        name="type"
                        id="type"
                        value={editType}
                        onChange={(e) => setEditType(e.target.value)}
                        onFocus={removeErrorMsg}
                    >
                        {
                            expenseTypes.map(type => {
                                return <option key={type.id} value={type.name}>{type.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className={styles.radios}>
                    <label className={styles.radio}>
                        <input
                            type="radio"
                            name="expenseStatus"
                            id="outstanding"
                            value="outstanding"
                            checked={editStatus == "outstanding"}
                            onChange={(e) => setEditStatus(e.target.value)}
                        />
                        <span>Outstanding</span>
                    </label>
                    <label className={styles.radio}>
                        <input
                            type="radio"
                            name="expenseStatus"
                            id="paid"
                            value="paid"
                            checked={editStatus == "paid"}
                            onChange={(e) => setEditStatus(e.target.value)}
                        />
                        <span>Paid</span>
                    </label>
                </div>
                <input
                    type="submit"
                    value="Edit Expense"
                    className={styles.editBtn}
                />
                {
                    displayError && <p className={styles.errorMsg}>{error}</p>
                }
            </form>
        </section>
    )
}

export default EditExpense