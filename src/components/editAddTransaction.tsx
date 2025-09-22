import { useEffect, useState } from "react"
import { Link, redirect, useParams } from "react-router"
import { accountsData, categoryData, frequencyData, typeOfTransaction } from "../mockData/MockData";
import type { AccountType, CategoryType, FrequencyType, TransactionType } from "../entityTypes/entityTypes";
import useTransactionsStore from "../stores/transactionStore";
import { v4 as uuidv4 } from 'uuid';

const EditAddTransaction = () => {

    // route
    let params = useParams();
    let route = params.id

    // state
    const [formHeading, setFormHeading] = useState("Add New Transaction")
    const [btnText, setBtnText] = useState("Add")

    // state - transaction data
    const [transaction, setTransaction] = useState<TransactionType | null>()
    const [type, setType] = useState("100a")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [frequency, setFrequency] = useState("")
    const [date, setDate] = useState("2025-09-12")
    const [account, setAccount] = useState("")

    // state - error
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    // state - input data
    const [categories, setCategories] = useState<CategoryType[] | null>([])
    const [transType, setTransTypes] = useState<CategoryType[] | null>([])
    const [frequencies, setFrequencies] = useState<FrequencyType[] | null>([])
    const [accounts, setAccounts] = useState<AccountType[] | null>([])

    //stores
    const getTransactionById = useTransactionsStore.getState().getTransactionById
    const updateTransaction = useTransactionsStore.getState().updateTransaction
    const addTransaction = useTransactionsStore.getState().addTransaction

    // useEffect - run when route changes
    useEffect(() => {
        // set form select data
        setCategories(categoryData)
        setFrequencies(frequencyData)
        setAccounts(accountsData)
        setTransTypes(typeOfTransaction)

        // if route is not present return
        if (!route) {
            redirect("/expenses/transactions")
            return
        }

        if (route == "add") {
            // add new transaction
            setFormHeading("Add New Transaction")
            setBtnText("Add")

        } else {
            // editing transaction
            setFormHeading("Edit Transaction")
            setBtnText("Edit")

            // fetch data
            let trans = getTransactionById(route)

            // runs when trans is not found
            if (!trans) {
                return
            }

            // set state values
            setTransaction(trans)
            setType(trans.type.Id)
            setDescription(trans.description)
            setAmount(trans.amount.toString())
            setCategory(trans.Category.Id)
            setFrequency(trans.Frequency.Id)
            setDate(trans.date)
            setAccount(trans.Account.Id)
        }
    }, [route])

    // function - runs on submit
    const HandleSubmit = (e: any) => {
        e.preventDefault()

        // error check
        if (description.trim().length < 4) {
            setErrorMsg("Please enter a description")
            setError(true)
        } else if (amount == "") {
            setErrorMsg("Please enter an amount")
            setError(true)
        } else if (category == "") {
            setErrorMsg("Please select a category")
            setError(true)
        } else if (account == "") {
            setErrorMsg("Please select an account")
            setError(true)
        } else if (frequency == "") {
            setErrorMsg("Please select a frequency")
            setError(true)
        } else if (date.trim().length < 4) {
            setErrorMsg("Please select a date")
            setError(true)
        } else {
            if (!route || !transaction) return

            if (route == "add") {
                // generate new id
                let newId = uuidv4();
                // set new category
                //let newCat = 
                // set new account
                // set new frequency
                // set new type

                // create new transaction
                let newTransaction: TransactionType = {
                    Id: newId,
                    description: description,
                    amount: parseFloat(amount),
                    categoryId: category,
                    Category: { Id: transaction.Category.Id, name: transaction.Category.name },
                    accountId: account,
                    Account: { Id: transaction.Account.Id, name: transaction.Account.name },
                    frequencyId: frequency,
                    Frequency: { Id: transaction.Frequency.Id, name: transaction.Frequency.name },
                    date: date,
                    status: "Paid",
                    typeId: type,
                    type: { Id: transaction.type.Id, name: transaction.type.name }
                }
                //update state
                addTransaction(newTransaction)

            } else {
                // set new category
                // set new account
                // set new frequency
                // set new type

                // create updated transaction
                let updatedTransaction: TransactionType = {
                    Id: transaction.Id,
                    description: description,
                    amount: parseFloat(amount),
                    categoryId: category,
                    Category: { Id: transaction.Category.Id, name: transaction.Category.name },
                    accountId: account,
                    Account: { Id: transaction.Account.Id, name: transaction.Account.name },
                    frequencyId: frequency,
                    Frequency: { Id: transaction.Frequency.Id, name: transaction.Frequency.name },
                    date: date,
                    status: "Paid",
                    typeId: type,
                    type: { Id: transaction.type.Id, name: transaction.type.name }
                }
                // update state
                updateTransaction(route, updatedTransaction)

            }
        }

        console.log(type, description, amount, category, account, frequency, date)
    }

    // function - reset error
    const removeError = () => {
        setError(false)
        setErrorMsg("")
    }

    return (
        <section>
            <form
                onSubmit={HandleSubmit}
                className="w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg"
            >
                <p className="text-2xl text-center mb-12 capitalize">{formHeading}</p>

                <section className="w-[80%] mx-auto">
                    {/* type */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {
                            transType && transType.map((types) => {
                                return (
                                    <div key={types.Id}>
                                        <input
                                            type="radio"
                                            name="type"
                                            value={types.Id}
                                            checked={type == types.Id}
                                            onChange={(e) => setType(e.target.value)}
                                            onFocus={removeError}
                                        />
                                        <label className="ms-2 capitalize">{types.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* description */}
                    <div className="mb-8 flex flex-col">
                        <label className="mb-2 text-gray-500">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border-b-2 border-gray-500 outline-0"
                            onFocus={removeError}
                        />
                    </div>

                    {/* amount */}
                    <div className="mb-8 flex flex-col">
                        <label className="mb-2 text-gray-500">Amount</label>
                        <input
                            type="float"
                            min={0}
                            value={amount}
                            placeholder="0"
                            onChange={(e) => setAmount(e.target.value)}
                            className="border-b-2 border-gray-400 outline-0 px-1 py-0.5"
                            onFocus={removeError}
                        />
                    </div>

                    {/* category */}
                    <div className="mb-8 flex flex-col">
                        <label className="mb-2 text-gray-500">Category</label>
                        <select
                            className="outline-0 w-[100%] py-1 mx-auto border-b-2 border-gray-400"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            onFocus={removeError}
                        >
                            <option value={""}>Select A Category</option>
                            {
                                categories && categories.map(category => {
                                    return (
                                        <option
                                            value={category.Id}
                                            key={category.Id}
                                        >{category.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    {/* account */}
                    <div className="mb-8 flex flex-col">
                        <label className="mb-2 text-gray-500">Account</label>
                        <select
                            className="outline-0 w-[100%] py-1 mx-auto border-b-2 border-gray-400"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            onFocus={removeError}
                        >
                            <option value={""}>Select An Account</option>
                            {
                                accounts && accounts.map(account => {
                                    return (
                                        <option
                                            value={account.Id}
                                            key={account.Id}
                                        >
                                            {account.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    {/* frequency */}
                    <div className="mb-8 flex flex-col">
                        <label className="mb-2 text-gray-500">Frequency</label>
                        <select
                            className="outline-0 w-[100%] py-1 mx-auto border-b-2 border-gray-400"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            onFocus={removeError}
                        >
                            <option value={""}>Select Frequency</option>
                            {
                                frequencies && frequencies.map(frequency => {
                                    return (
                                        <option
                                            value={frequency.Id}
                                            key={frequency.Id}
                                        >{frequency.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    {/* date */}
                    <div className="flex flex-col gap-4 mb-14">
                        {
                            (frequency == "2") ?
                                <p className="mb-2 text-gray-500">Start Date:</p> :
                                <p className="mb-2 text-gray-500">Date:</p>
                        }
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            onFocus={removeError}
                            className="outline-0 border-b-2 border-gray-500"
                        />
                    </div>

                    {/* error message */}
                    {
                        error && <p className="text-center text-lg text-red-800 mb-8 italic">{errorMsg}</p>
                    }

                    {/* submit button */}
                    <div className="flex justify-center gap-5">
                        <input
                            type="submit"
                            value={btnText}
                            className="bg-sky-900 w-[30%] text-white text-lg py-2 px-4 rounded-lg cursor-pointer shadow-md hover:shadow-2xl"
                        />
                        <Link to={"/expenses/transactions"}
                            className="bg-gray-500 text-white w-[30%] text-center text-lg block shadow-md py-2.5 px-4 rounded-lg cursor-pointer hover:shadow-2xl"
                        >Cancel</Link>
                    </div>

                </section>
            </form >
        </section >
    )
}

export default EditAddTransaction