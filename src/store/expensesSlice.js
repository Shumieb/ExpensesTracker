import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    balance: 8000,
    expensesData: [],
    selectedFilterType: "All",
    selectedFilterStatus: "all",
    expenseToEdit: {},
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        InitialExpenses: (state, action) => {
            state.expensesData = action.payload
        },
        UpdateFilterType: (state, action) => {
            state.selectedFilterType = action.payload
        },
        UpdateFilterStatus: (state, action) => {
            state.selectedFilterStatus = action.payload
        },
        UpdateExpenseToEdit: (state, action) => {
            let newExpenseToEdit = state.expensesData.find(expense => expense.id == action.payload);
            state.expenseToEdit = newExpenseToEdit;
        },
        UpdateExpenseStatus: (state, action) => {
            const expense = state.expensesData.find((expense) => expense.id === action.payload);
            if (expense) {
                expense.status = "paid"
            }
        },
        DeleteExpense: (state, action) => {
            state.expensesData.splice(state.expensesData.findIndex((expense) => expense.id === action.payload), 1);
        },
        UpdateExpense: (state, action) => {
            const expense = state.expensesData.find((expense) => expense.id === action.payload.id);
            if (expense) {
                expense.name = action.payload.name
                expense.status = action.payload.status
                expense.type = action.payload.type
                expense.amount = action.payload.amount
            }
        },
        UpdateCurrentBalance: (state, action) => {
            state.balance = action.payload
        },
        AddNewExpense: (state, action) => {
            state.expensesData.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { InitialExpenses,
    UpdateFilterType,
    UpdateFilterStatus,
    UpdateExpenseToEdit,
    UpdateExpenseStatus,
    DeleteExpense,
    UpdateExpense,
    UpdateCurrentBalance,
    AddNewExpense } = expensesSlice.actions

export default expensesSlice.reducer