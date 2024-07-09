import { useEffect, useState } from "react";
import Expense from "../expense/Expense";
import styles from "./expensesList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import FilterBar from "../filterBar/FilterBar";
import { storeData } from "../../assets/data";
import { InitialExpenses } from "../../store/expensesSlice";

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
        // get data from local storage
        let storedData = localStorage.getItem("storedExpenses");

        if (!storedData) {
            console.log("no data")
            localStorage.setItem("storedExpenses", JSON.stringify(storeData));
            dispatch(InitialExpenses(storeData));
        } else {
            dispatch(InitialExpenses(JSON.parse(storedData)));
        }
    }, [])

    useEffect(() => {
        if (expensesData.length > 0) {
            localStorage.setItem("storedExpenses", JSON.stringify(expensesData));
        }
    }, [expensesData])


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
                <span className={styles.hr}><hr /></span>
                <div className={styles.btns}>
                    <button className={styles.btn}
                        onClick={() => showHideModal("addExpenseModal", true)}
                    >Add New Expense</button>
                </div>
                <FilterBar />
            </div>
            <div>
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
            </div>
            <div>
                {
                    (displayedData.length <= 0 && selectedFilterType != "All" && selectedFilterStatus != "all")
                        ? <p className={styles.emptyMsg}>There are no {selectedFilterStatus} expenses of type {selectedFilterType.toLowerCase()}</p>
                        : ""
                }
                {
                    (displayedData.length <= 0 && selectedFilterType == "All" && selectedFilterStatus == "all")
                        ? <p className={styles.emptyMsg}>There are no expenses in the expenses list.</p>
                        : ""
                }
                {
                    (displayedData.length <= 0 && selectedFilterType == "All" && selectedFilterStatus != "all")
                        ? <p className={styles.emptyMsg}>There are no {selectedFilterStatus} expenses of type {selectedFilterType.toLowerCase()} in the expenses list.</p>
                        : ""
                }
                {
                    (displayedData.length <= 0 && selectedFilterType != "All" && selectedFilterStatus == "all")
                        ? <p className={styles.emptyMsg}>There are no expenses of type {selectedFilterType.toLowerCase()} in the expenses list.</p>
                        : ""
                }
            </div>
        </section>
    )
}

export default ExpensesList