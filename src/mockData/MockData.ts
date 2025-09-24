import type {
    AccountType,
    CategoryType,
    FrequencyType,
    Status,
    TransactionType,
    TypeOfTransaction
} from "../entityTypes/entityTypes";

export const categoryData: CategoryType[] = [
    { Id: "100a", name: "Grocery Shopping" },
    { Id: "200a", name: "Clothes Shopping" },
    { Id: "300a", name: "Tech Shopping" },
    { Id: "400a", name: "Utility Bills" },
    { Id: "500a", name: "Rent/Mortgage" },
    { Id: "600a", name: "Income" },
]

export const frequencyData: FrequencyType[] = [
    { Id: "100a", name: "Once only" },
    { Id: "200a", name: "Monthly" },
    { Id: "300a", name: "Yearly" },
]

export const accountsData: AccountType[] = [
    { Id: "100a", name: "Current" },
]

export const typeOfTransaction: TypeOfTransaction[] = [
    { Id: "100a", name: "Expense" },
    { Id: "200a", name: "Income" },
]

export const transactionStatus: Status[] = [
    { Id: "1", name: "Paid" },
    { Id: "2", name: "Outstanding" }
]

export const transactionData: TransactionType[] = [
    {
        Id: "100a",
        description: "Boots Shopping",
        amount: 20.99,
        categoryId: "200a",
        Category: { Id: "200a", name: "Clothes Shopping" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "100a",
        Frequency: { Id: "100a", name: "Once only" },
        date: "2025-09-28",
        statusId: "2",
        status: { Id: "2", name: "Outstanding" },
        typeId: "100a",
        type: { Id: "100a", name: "Expense" }
    },
    {
        Id: "200a",
        description: "Rent",
        amount: 200.99,
        categoryId: "500a",
        Category: { Id: "500a", name: "Rent/Mortgage" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "200a",
        Frequency: { Id: "200a", name: "Monthly" },
        date: "2025-09-10",
        statusId: "1",
        status: { Id: "1", name: "Paid" },
        typeId: "100a",
        type: { Id: "100a", name: "Expense" }
    },
    {
        Id: "300a",
        description: "Amazon Shopping",
        amount: 28.99,
        categoryId: "300a",
        Category: { Id: "300a", name: "Tech Shopping" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "200a",
        Frequency: { Id: "100a", name: "Once only" },
        date: "2025-09-27",
        statusId: "2",
        status: { Id: "2", name: "Outstanding" },
        typeId: "100a",
        type: { Id: "100a", name: "Expense" }
    },
    {
        Id: "400a",
        description: "Mot",
        amount: 59.99,
        categoryId: "400a",
        Category: { Id: "400a", name: "Utility Bills" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "300a",
        Frequency: { Id: "300a", name: "Yearly" },
        date: "2025-09-20",
        statusId: "1",
        status: { Id: "1", name: "Paid" },
        typeId: "100a",
        type: { Id: "100a", name: "Expense" }
    },
    {
        Id: "500a",
        description: "Water Bill",
        amount: 150.99,
        categoryId: "400a",
        Category: { Id: "400a", name: "Utility Bills" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "200a",
        Frequency: { Id: "200a", name: "Monthly" },
        date: "2025-09-10",
        statusId: "1",
        status: { Id: "1", name: "Paid" },
        typeId: "100a",
        type: { Id: "100a", name: "Expense" }
    },
    {
        Id: "600a",
        description: "Wages",
        amount: 1500.99,
        categoryId: "600a",
        Category: { Id: "600a", name: "Income" },
        accountId: "100a",
        Account: { Id: "100a", name: "Current" },
        frequencyId: "200a",
        Frequency: { Id: "200a", name: "Monthly" },
        date: "2025-09-01",
        statusId: "1",
        status: { Id: "1", name: "Paid" },
        typeId: "200a",
        type: { Id: "200a", name: "Income" }
    },
]