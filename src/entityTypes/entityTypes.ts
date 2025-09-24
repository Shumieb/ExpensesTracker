export interface CategoryType {
    Id: string,
    name: string
}

export interface AccountType {
    Id: string
    name: string
}

export interface FrequencyType {
    Id: string
    name: string
}

export interface TypeOfTransaction {
    Id: string,
    name: "Expense" | "Income"
}

export interface Status {
    Id: string,
    name: "Paid" | "Outstanding"
}

export interface TransactionType {
    Id: string
    description: string
    amount: number
    typeId: string
    type: TypeOfTransaction
    categoryId: string
    Category: CategoryType
    accountId: string
    Account: AccountType
    frequencyId: string
    Frequency: FrequencyType
    date: string
    statusId: string
    status: Status
}