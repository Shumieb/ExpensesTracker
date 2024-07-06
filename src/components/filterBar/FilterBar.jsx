import styles from "./filterBar.module.css"

function FilterBar() {
    return (
        <section className={styles.filterBar}>
            <div>
                <label htmlFor="expenseType">Expense Type: </label>
                <select name="expenseType" id="expenseType" className={styles.filterSelect}>
                    <option value="all">All</option>
                    <option value="utility">Utility</option>
                    <option value="shopping">Shopping</option>
                    <option value="savings">Savings</option>
                    <option value="credit">Credit</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className={styles.filterRadios}>
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
        </section>
    )
}

export default FilterBar