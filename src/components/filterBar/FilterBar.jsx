import styles from "./filterBar.module.css";
import { expenseTypes } from "../../assets/data";
import { useSelector, useDispatch } from 'react-redux';
import { UpdateFilterType, UpdateFilterStatus } from "../../store/expensesSlice";

function FilterBar() {

    // values from store
    const selectedFilterType = useSelector((state) => state.expenses.selectedFilterType);
    const selectedFilterStatus = useSelector((state) => state.expenses.selectedFilterStatus);
    const dispatch = useDispatch();

    return (
        <section className={styles.filterBar}>
            <div className={styles.filterS}>
                <label>Expense Type: </label>
                <select
                    name="expenseType"
                    id="expenseType"
                    className={styles.filterSelect}
                    value={selectedFilterType}
                    onChange={(e) => dispatch(UpdateFilterType(e.target.value))}
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
                        onChange={(e) => dispatch(UpdateFilterStatus(e.target.value))}
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
                        onChange={(e) => dispatch(UpdateFilterStatus(e.target.value))}
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
                        onChange={(e) => dispatch(UpdateFilterStatus(e.target.value))}
                    />
                    <span>Paid</span>
                </label>
            </div>
        </section>
    )
}

export default FilterBar