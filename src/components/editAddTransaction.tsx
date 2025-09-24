import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import type { AccountType, CategoryType, FrequencyType, Status, TransactionType, TypeOfTransaction } from "../entityTypes/entityTypes";
import useTransactionsStore from "../stores/zustand/transactionStore";
import { v4 as uuidv4 } from 'uuid';
import SelectComponent from "./selectComponent";
import RadioBtnComponent from "./radioBtnComponent";
import CancelBtn from "./cancelBtn";
import SubmitBtn from "./submitBtn";
import DateInputComponent from "./dateInputComponent";
import NumberInputComponent from "./numberInputComponent";
import TextInputComponent from "./textInputComponent";
import useCategoriesStore from "../stores/zustand/categoriesStore";
import useFrequenciesStore from "../stores/zustand/frequenciesStore";
import useAccountsStore from "../stores/zustand/accountsStore";
import useTransactionTypesStore from "../stores/zustand/transactionTypesStore";
import { transactionStatus } from "../mockData/MockData";

const EditAddTransaction = () => {

    // route
    let params = useParams();
    let transactionId = params.id
    const navigate = useNavigate();

    // state
    const [formHeading, setFormHeading] = useState("Add New Transaction")
    const [btnText, setBtnText] = useState("Add")

    // state - transaction data
    const [transaction, setTransaction] = useState<TransactionType | null>()
    const [typeId, setTypeId] = useState("100a")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [frequencyId, setFrequencyId] = useState("")
    const [date, setDate] = useState("2025-09-12")
    const [accountId, setAccountId] = useState("")
    const [transStatusId, setTransStatusId] = useState("2")

    // state - error
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    // state - input data
    const [categories, setCategories] = useState<CategoryType[] | null>([])
    const [transType, setTransTypes] = useState<CategoryType[] | null>([])
    const [frequencies, setFrequencies] = useState<FrequencyType[] | null>([])
    const [accounts, setAccounts] = useState<AccountType[] | null>([])
    const [status, setStatus] = useState<Status[] | null>([])

    //stores
    // transactions store
    const getTransactionById = useTransactionsStore.getState().getTransactionById
    const updateTransaction = useTransactionsStore.getState().updateTransaction
    const addTransaction = useTransactionsStore.getState().addTransaction
    // categories store
    const getCategories = useCategoriesStore.getState().initializeCategories
    const getCategoryById = useCategoriesStore.getState().getCategoryById
    // frequencies store
    const getFrequencies = useFrequenciesStore.getState().initializeFrequencies
    const getFrequencyById = useFrequenciesStore.getState().getFrequencyById
    // accounts store
    const getAccounts = useAccountsStore.getState().initializeAccounts
    const getAccountById = useAccountsStore.getState().getAccountById
    // trans types
    const getTransTypes = useTransactionTypesStore.getState().initializeTypes
    const getTypesById = useTransactionTypesStore.getState().getTypesById

    // useEffect - run when route changes
    useEffect(() => {
        // set form select data
        // set categories
        let categoryData = getCategories()
        setCategories(categoryData)
        // get frequencies
        let frequencyData = getFrequencies()
        setFrequencies(frequencyData)
        // get accounts
        let accountsData = getAccounts()
        setAccounts(accountsData)
        // get trans types
        let typeOfTransaction = getTransTypes()
        setTransTypes(typeOfTransaction)
        // set status
        setStatus(transactionStatus)

        // if route is not present redirect
        if (!transactionId) {
            navigate("/expenses/transactions")
            return
        }

        if (transactionId == "add") {
            // add new transaction
            setFormHeading("Add New Transaction")
            setBtnText("Add")

        } else {
            // editing transaction
            setFormHeading("Edit Transaction")
            setBtnText("Edit")

            // fetch transaction data
            let trans = getTransactionById(transactionId)

            // runs when trans is not found
            if (!trans) {
                console.log("Failed to get transaction")
                return
            }

            // set state values
            setTransaction(trans)
            setTypeId(trans.type.Id)
            setDescription(trans.description)
            setAmount(trans.amount.toString())
            setCategoryId(trans.Category.Id)
            setFrequencyId(trans.Frequency.Id)
            setDate(trans.date)
            setAccountId(trans.Account.Id)
            setTransStatusId(trans.status.Id)
        }
    }, [transactionId])

    // function - runs on submit
    const HandleSubmit = (e: any) => {
        // prevent auto page refresh
        e.preventDefault()

        // error check
        if (description == "") {
            setErrorMsg("Please enter a description")
            setError(true)
        } else if (amount == "") {
            setErrorMsg("Please enter an amount")
            setError(true)
        } else if (categoryId == "") {
            setErrorMsg("Please select a category")
            setError(true)
        } else if (accountId == "") {
            setErrorMsg("Please select an account")
            setError(true)
        } else if (frequencyId == "") {
            setErrorMsg("Please select a frequency")
            setError(true)
        } else if (date.trim().length < 1) {
            setErrorMsg("Please select a date")
            setError(true)
        } else {
            // when form data is valid
            // is there is no id or transaction or status
            if (!transactionId || !transaction || !status) {
                console.log("missing values")
                return
            }

            /// set new category
            let newCategory = getCategoryById(categoryId)
            // set new account
            let newAccount = getAccountById(accountId)
            // set new frequency
            let newFrequency = getFrequencyById(frequencyId)
            // set new type
            let newType = getTypesById(typeId)
            // set status
            let newStatus = status.find(status => status.Id == transStatusId)

            // if no category, account, frequency, type, status
            if (!newCategory || !newAccount || !newFrequency || !newType || !newStatus) {
                console.log("could not set new values")
                return
            }

            if (transactionId == "add") {
                // generate new id
                let newId = uuidv4();
                // create new transaction
                let newTransaction: TransactionType = createTransaction(
                    newId,
                    newCategory,
                    newAccount,
                    newFrequency,
                    newStatus,
                    newType
                )
                //update state
                addTransaction(newTransaction)
                // redirect to transactions
                navigate("/expenses/transactions")

            } else {
                // create updated transaction
                let updatedTransaction: TransactionType = createTransaction(
                    transaction.Id,
                    newCategory,
                    newAccount,
                    newFrequency,
                    newStatus,
                    newType
                )
                // update state
                updateTransaction(transactionId, updatedTransaction)
                // redirect to transactions
                navigate("/expenses/transactions")
            }
        }

        //console.log(typeId, description, amount, categoryId, accountId, frequencyId, date)
    }

    //create new or updated transaction
    const createTransaction = (
        newId: string,
        newCategory: CategoryType,
        newAccount: AccountType,
        newFrequency: FrequencyType,
        status: Status,
        newType: TypeOfTransaction
    ) => {

        let createdTransaction: TransactionType = {
            Id: newId,
            description: description,
            amount: parseFloat(amount),
            categoryId: categoryId,
            Category: newCategory,
            accountId: accountId,
            Account: newAccount,
            frequencyId: frequencyId,
            Frequency: newFrequency,
            date: date,
            statusId: transStatusId,
            status: status,
            typeId: typeId,
            type: newType
        }
        return createdTransaction
    }

    // function - reset error
    const removeError = () => {
        setError(false)
        setErrorMsg("")
    }

    // jsx to display
    return (
        <section>
            <form onSubmit={HandleSubmit}
                className="w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg"
            >
                <p className="text-2xl text-center mb-8 capitalize">{formHeading}</p>

                <section className="w-[80%] mx-auto">
                    {/* type */}
                    <div className="flex justify-center items-center gap-8 mb-8">
                        {
                            transType && transType.map((types) => {
                                return (
                                    <div key={types.Id}>
                                        <RadioBtnComponent
                                            value={types.Id}
                                            name={"type"}
                                            selectedValue={typeId}
                                            setSelectedValue={setTypeId}
                                            removeError={removeError}
                                            labelText={types.name}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* description */}
                    <div className="mb-8 flex flex-col">
                        <TextInputComponent
                            labelTxt="Description"
                            value={description}
                            setValue={setDescription}
                            removeError={removeError}
                        />
                    </div>

                    {/* amount */}
                    <div className="mb-8 flex flex-col">
                        <NumberInputComponent
                            labelTxt="Amount"
                            value={amount}
                            setValue={setAmount}
                            removeError={removeError}
                        />
                    </div>

                    {/* category */}
                    <div className="mb-8 flex flex-col">
                        {
                            categories && <SelectComponent
                                labelText="Category"
                                value={categoryId}
                                setValue={setCategoryId}
                                removeError={removeError}
                                defaultTitle="Select A Category"
                                optionsData={categories}
                            />
                        }
                    </div>

                    {/* account */}
                    <div className="mb-8 flex flex-col">
                        {
                            accounts && <SelectComponent
                                labelText="Account"
                                value={accountId}
                                setValue={setAccountId}
                                removeError={removeError}
                                defaultTitle="Select An Account"
                                optionsData={accounts}
                            />
                        }
                    </div>

                    {/* frequency */}
                    <div className="mb-8 flex flex-col">
                        {
                            frequencies && <SelectComponent
                                labelText="Frequency"
                                value={frequencyId}
                                setValue={setFrequencyId}
                                removeError={removeError}
                                defaultTitle="Select Frequency"
                                optionsData={frequencies}
                            />
                        }
                    </div>

                    {/* date */}
                    <div className="flex flex-col gap-4 mb-10">
                        {
                            (frequencyId == "2") ?
                                <p className="mb-2 text-gray-500">Start Date:</p> :
                                <p className="mb-2 text-gray-500">Date:</p>
                        }
                        <DateInputComponent
                            date={date}
                            setDate={setDate}
                            removeError={removeError}
                        />
                    </div>
                    {/* type */}
                    <div className="flex justify-center items-center gap-8 mb-14">
                        {
                            status && status.map((stat) => {
                                return (
                                    <div key={stat.Id}>
                                        <RadioBtnComponent
                                            value={stat.Id}
                                            name={"status"}
                                            selectedValue={transStatusId}
                                            setSelectedValue={setTransStatusId}
                                            removeError={removeError}
                                            labelText={stat.name}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* error message */}
                    {
                        error && <p className="text-center text-lg text-red-800 mb-8 italic">{errorMsg}</p>
                    }

                    {/* submit button */}
                    <div className="flex justify-center gap-5">
                        <SubmitBtn btnText={btnText} />
                        <CancelBtn link="/expenses/transactions" />
                    </div>
                </section>
            </form >
        </section >
    )
}

export default EditAddTransaction