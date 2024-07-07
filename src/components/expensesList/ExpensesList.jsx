import { useEffect, useState } from "react"
import Expense from "../expense/Expense"
import styles from "./expensesList.module.css"

function ExpensesList({
    myData,
    showHideModal,
    updateExpenseToEdit,
    updateExpenseStatus,
    deleteExpense,
    selectedFilterType,
    selectedFilterStatus }) {

    // variables
    const [displayedData, setDisplayedData] = useState([]);

    // use effect
    useEffect(() => {
        let filteredData = [];

        if (selectedFilterType != "All") {
            filteredData = myData.filter(expense => expense.type == selectedFilterType);

            if (selectedFilterStatus != "all") {
                filteredData = filteredData.filter(expense => expense.status == selectedFilterStatus);
                setDisplayedData(filteredData);

            } else {
                setDisplayedData(filteredData);
            }

        } else {
            filteredData = [...myData];

            if (selectedFilterStatus != "all") {
                filteredData = filteredData.filter(expense => expense.status == selectedFilterStatus);
                setDisplayedData(filteredData);

            } else {
                setDisplayedData(filteredData);
            }
        }

    }, [selectedFilterType, selectedFilterStatus, myData])

    return (
        <section className={styles.list}>
            <ul className={styles.expensesList}>
                {
                    displayedData.map(expense => {
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