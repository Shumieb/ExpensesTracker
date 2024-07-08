import { useEffect, useState } from "react"
import Expense from "../expense/Expense"
import styles from "./expensesList.module.css"

import { useSelector, useDispatch } from 'react-redux';
import FilterBar from "../filterBar/FilterBar";

function ExpensesList({ showHideModal }) {

    // values from store
    const selectedFilterType = useSelector((state) => state.expenses.selectedFilterType);
    const selectedFilterStatus = useSelector((state) => state.expenses.selectedFilterStatus);
    const expensesData = useSelector((state) => state.expenses.expensesData);
    const dispatch = useDispatch();

    // variables
    const [displayedData, setDisplayedData] = useState([]);

    // use effect
    useEffect(() => {
        let filteredData = [];

        if (selectedFilterType != "All") {
            filteredData = expensesData.filter(expense => expense.type == selectedFilterType);

            if (selectedFilterStatus != "all") {
                filteredData = filteredData.filter(expense => expense.status == selectedFilterStatus);
                setDisplayedData(filteredData);

            } else {
                setDisplayedData(filteredData);
            }

        } else {
            filteredData = [...expensesData];

            if (selectedFilterStatus != "all") {
                filteredData = filteredData.filter(expense => expense.status == selectedFilterStatus);
                setDisplayedData(filteredData);

            } else {
                setDisplayedData(filteredData);
            }
        }

    }, [selectedFilterType, selectedFilterStatus, expensesData])

    return (
        <section className={styles.list}>
            <div>
                <h2 className={styles.heading}>Expenses List</h2>
                <p className={styles.hr}><hr /></p>
                <div className={styles.btns}>
                    <button className={styles.btn}
                        onClick={() => showHideModal("addExpenseModal", true)}
                    >Add New Expense</button>
                </div>
                <FilterBar />
            </div>
            <ul className={styles.expensesList}>
                {
                    displayedData.map(expense => {
                        return <Expense
                            expense={expense}
                            key={expense.id}
                            showHideModal={showHideModal}
                        />
                    })
                }
            </ul>
        </section>
    )
}

export default ExpensesList