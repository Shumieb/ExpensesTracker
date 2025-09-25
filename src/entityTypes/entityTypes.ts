export interface CategoryType {
    id: number
    name: string
    created_at?: Date
}

export interface AccountType {
    id: number
    name: string
    created_at?: Date

}

export interface FrequencyType {
    id: number,
    name: string
    created_at?: Date
}

export interface TypeOfTransaction {
    id: number
    name: string
    created_at?: Date
}

export interface Status {
    id: number
    name: string
    created_at?: Date
}

export interface TransactionType {
    id: number
    description: string
    amount: number
    dueDate: string
    created_at?: Date
    TypeId: number
    TypeName: string
    CategoryId: number
    CategoryName: string
    AccountId: number
    AccountName: string
    FrequencyId: number
    FrequencyName: string
    StatusId: number
    StatusName: string
}