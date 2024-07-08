import { useState } from "react"
import styles from "./addExpense.module.css"
import { expenseTypes, expensesData } from "../../assets/data";
import { checkType } from "../../assets/utils";
import { useDispatch } from 'react-redux';
import { AddNewExpense } from "../../store/expensesSlice";

function AddExpense({ showHideModal }) {

  // values from store
  const dispatch = useDispatch();

  // variable
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [newType, setNewType] = useState("default");
  const [status, setStatus] = useState("outstanding");
  const [error, setError] = useState("");
  const [displayError, setDisplayError] = useState(false);

  // functions
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newName != "") {
      if (newAmount != 0) {
        if (newType != "default") {
          let validType = checkType(expenseTypes, newType);
          let newId = expensesData.length + Math.random();

          if (validType) {
            let newExpense = {
              "id": newId,
              "name": newName,
              "status": status,
              "type": newType,
              "amount": Number(newAmount)
            }

            dispatch(AddNewExpense(newExpense));
            showHideModal("addExpenseModal", false);
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
          onClick={() => showHideModal("addExpenseModal", false)}
        >&times;</span>
        <h2 className={styles.header}>Add New Expense</h2>
        <span className={styles.hr}><hr /></span>
        <div>
          <label htmlFor="name">Expense: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="expense"
            className={styles.modalInput}
            autoComplete="off"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
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
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            onFocus={removeErrorMsg}
          />
        </div>
        <div className={styles.typeSelect}>
          <p>Expense Type: </p>
          <select
            name="type"
            id="type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            onFocus={removeErrorMsg}
          >
            <option value="default" disabled>Select Type</option>
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
              checked={status == "outstanding"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <span>Outstanding</span>
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="expenseStatus"
              id="paid"
              value="paid"
              checked={status == "paid"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <span>Paid</span>
          </label>
        </div>
        <input
          type="submit"
          value="Add Expense"
          className={styles.addBtn}
        />
        {
          displayError && <p className={styles.errorMsg}>{error}</p>
        }
      </form>
    </section>
  )
}

export default AddExpense