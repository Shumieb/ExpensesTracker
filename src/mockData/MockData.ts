import type {
    AccountType,
    CategoryType,
    FrequencyType,
    Status,
    TransactionType,
    TypeOfTransaction
} from "../entityTypes/entityTypes";

export const categoryData: CategoryType[] = [
    { id: 1, name: "Grocery Shopping" },
    { id: 2, name: "Other Shopping" },
    { id: 3, name: "Utility Bills" },
    { id: 4, name: "Rent/Mortgage" },
    { id: 5, name: "Salary" },
    { id: 6, name: "Other Income" },
]

export const frequencyData: FrequencyType[] = [
    { id: 1, name: "Once only" },
    { id: 2, name: "Monthly" },
    { id: 3, name: "Yearly" },
]

export const accountsData: AccountType[] = [
    { id: 1, name: "Current" },
]

export const typeOfTransaction: TypeOfTransaction[] = [
    { id: 1, name: "Expense" },
    { id: 2, name: "Income" },
]

export const transactionStatus: Status[] = [
    { id: 1, name: "Paid" },
    { id: 2, name: "Outstanding" }
]

export const transactionData: TransactionType[] = [
    {
        id: 1,
        description: "Boots Shopping",
        amount: 20.99,
        CategoryId: 2,
        AccountId: 1,
        FrequencyId: 1,
        dueDate: new Date(2025, 12, 5),
        created_at: new Date(),
        StatusId: 2,
        TypeId: 1,
    },
    {
        id: 2,
        description: "Rent",
        amount: 200.99,
        CategoryId: 4,
        AccountId: 1,
        FrequencyId: 2,
        dueDate: new Date(2025, 12, 5),
        StatusId: 1,
        created_at: new Date(),
        TypeId: 1,
    },
    {
        id: 3,
        description: "Amazon Shopping",
        amount: 28.99,
        CategoryId: 2,
        AccountId: 1,
        FrequencyId: 1,
        dueDate: new Date(2025, 12, 5),
        StatusId: 2,
        created_at: new Date(),
        TypeId: 1,
    },
    {
        id: 4,
        description: "Mot",
        amount: 59.99,
        CategoryId: 3,
        AccountId: 1,
        FrequencyId: 3,
        dueDate: new Date(2025, 12, 5),
        StatusId: 1,
        created_at: new Date(),
        TypeId: 1,
    },
    {
        id: 5,
        description: "Water Bill",
        amount: 150.99,
        CategoryId: 3,
        AccountId: 1,
        FrequencyId: 2,
        dueDate: new Date(2025, 12, 5),
        StatusId: 1,
        created_at: new Date(),
        TypeId: 1,
    },
    {
        id: 6,
        description: "Wages",
        amount: 1500.99,
        CategoryId: 5,
        AccountId: 1,
        FrequencyId: 2,
        created_at: new Date(),
        dueDate: new Date(2025, 12, 5),
        StatusId: 1,
        TypeId: 2,
    },
]