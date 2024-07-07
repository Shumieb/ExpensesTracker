import styles from "./addExpense.module.css"

function AddExpense({ showHideModal }) {
  return (
    <section className={styles.modal}>
      <form className={styles.modalContent}>
        <span className={styles.close} onClick={() => showHideModal("addExpenseModal", false)}>&times;</span>
        <h2 className={styles.header}>Add New Expense</h2>
        <span className={styles.hr}><hr /></span>
        <div>
          <label htmlFor="name">Expense: </label>
          <input type="text" name="name" id="name" className={styles.modalInput} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input type="number" name="amount" id="amount" className={styles.modalInput} autoComplete="off" min={0} />
        </div>
        <div className={styles.typeSelect}>
          <p>Expense Type: </p>
          <select name="type" id="type">
            <option value="utility">Utility</option>
            <option value="shopping">Shopping</option>
            <option value="savings">Savings</option>
            <option value="credit">Credit</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.radios}>
          <label className={styles.radio}>
            <input type="radio" name="expenseStatus" id="all" />
            <span>All</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="expenseStatus" id="outstanding" />
            <span>Outstanding</span>
          </label>
          <label className={styles.radio}>
            <input type="radio" name="expenseStatus" id="paid" />
            <span>Paid</span>
          </label>
        </div>
        <input type="submit" value="Add Expense" className={styles.addBtn} />
      </form>
    </section>
  )
}

export default AddExpense