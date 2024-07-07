import { useState } from "react"
import styles from "./filterBar.module.css";
import { expenseTypes } from "../../assets/data";

function FilterBar({ selectedFilterType, updateFilterType, selectedFilterStatus, updateFilterStatus }) {

    return (
        <section className={styles.filterBar}>
            <div>
                <label htmlFor="expenseType">Expense Type: </label>
                <select
                    name="expenseType"
                    id="expenseType"
                    className={styles.filterSelect}
                    value={selectedFilterType}
                    onChange={(e) => updateFilterType(e.target.value)}
                >
                    <option value="All" >All</option>
                    {
                        expenseTypes.map(type => {
                            return <option key={type.id} value={type.name}>{type.name}</option>
                        })
                    }
                </select>
            </div>
            <div className={styles.filterRadios}>
                <label className={styles.radio}>
                    <input
                        type="radio"
                        name="expenseStatus"
                        id="all"
                        value="all"
                        checked={selectedFilterStatus == "all"}
                        onChange={(e) => updateFilterStatus(e.target.value)}
                    />
                    <span>All</span>
                </label>
                <label className={styles.radio}>
                    <input
                        type="radio"
                        name="expenseStatus"
                        id="outstanding"
                        value="outstanding"
                        checked={selectedFilterStatus == "outstanding"}
                        onChange={(e) => updateFilterStatus(e.target.value)}
                    />
                    <span>Outstanding</span>
                </label>
                <label className={styles.radio}>
                    <input
                        type="radio"
                        name="expenseStatus"
                        id="paid"
                        value="paid"
                        checked={selectedFilterStatus == "paid"}
                        onChange={(e) => updateFilterStatus(e.target.value)}
                    />
                    <span>Paid</span>
                </label>
            </div>
        </section>
    )
}

export default FilterBar