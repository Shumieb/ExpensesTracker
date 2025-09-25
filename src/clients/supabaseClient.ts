import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase URL or Key in environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey)

// fetch all accounts
const getAllAccounts = async () => {
    const { data, error } = await supabase
        .from('Accounts')
        .select()

    if (error) {
        throw new Error('Failed to get accounts data from Database');
    } else {
        console.log(data)
        return data
    }
}

// fetch all categories
const getAllCategories = async () => {
    const { data, error } = await supabase
        .from('Categories')
        .select()

    if (error) {
        throw new Error('Failed to get categories data from Database');
    } else {
        console.log(data)
        return data
    }
}

// fetch all frequenscies
const getAllFrequencies = async () => {
    const { data, error } = await supabase
        .from('Frequencies')
        .select()

    if (error) {
        throw new Error('Failed to get frequencies data from Database');
    } else {
        console.log(data)
        return data
    }
}

// fetch all status
const getAllStatus = async () => {
    const { data, error } = await supabase
        .from('Status')
        .select()

    if (error) {
        throw new Error('Failed to get status data from Database');
    } else {
        console.log(data)
        return data
    }
}

// fetch all type
const getAllTypes = async () => {
    const { data, error } = await supabase
        .from('Types')
        .select()

    if (error) {
        throw new Error('Failed to get types data from Database');
    } else {
        console.log(data)
        return data
    }
}

// fetch transactions
const getAllTransactions = async () => {
    const { data, error } = await supabase
        .from('Transactions')
        .select(
            `
            id,
            description,
            amount,
            dueDate,
            CategoryId,
            FrequencyId,
            StatusId,
            TypeId,
            AccountId,
            ...Categories(
            CategoryName:name
            ),
            ...Frequencies(
            FrequencyName:name
            ),
            ...Status(
            StatusName:name
            ),
            ...Types(
            TypeName:name
            ),
            ...Accounts(
            AccountName:name
            )
            `,
        )

    if (error) {
        throw new Error('Failed to get transaction data from Database');
    } else {
        console.log(data)
        return data
    }
}


export {
    getAllAccounts,
    getAllCategories,
    getAllFrequencies,
    getAllStatus,
    getAllTypes,
    getAllTransactions
}

