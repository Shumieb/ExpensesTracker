import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import type { AccountType, CategoryType, FrequencyType, Status, TransactionType } from "../../entityTypes/entityTypes";
import useTransactionsStore from "../../stores/zustand/transactionsStore";
import SelectComponent from "../UI/selectComponent";
import RadioBtnComponent from "../UI/radioBtnComponent";
import CancelBtn from "../UI/cancelBtn";
import SubmitBtn from "../UI/submitBtn";
import DateInputComponent from "../UI/dateInputComponent";
import NumberInputComponent from "../UI/numberInputComponent";
import TextInputComponent from "../UI/textInputComponent";
import useCategoriesStore from "../../stores/zustand/categoriesStore";
import useFrequenciesStore from "../../stores/zustand/frequenciesStore";
import useAccountsStore from "../../stores/zustand/accountsStore";
import useTransactionTypesStore from "../../stores/zustand/transactionTypesStore";
import useStatusStore from "../../stores/zustand/statusStore";

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
    // accounts store
    const getAccountsData = useAccountsStore.getState().initializeAccounts
    const accountsStoreData = useAccountsStore.getState().accounts
    // categories store
    const getCategoriesData = useCategoriesStore.getState().initializeCategories
    const categoriesStoreData = useCategoriesStore.getState().categories
    // frequencies store
    const getFrequenciesData = useFrequenciesStore.getState().initializeFrequencies
    const frequenciesStoreData = useFrequenciesStore.getState().frequencies
    // types store
    const getTypesData = useTransactionTypesStore.getState().initializeTypes
    const typesStoreData = useTransactionTypesStore.getState().types
    // status store
    const getStatusData = useStatusStore.getState().initializeStatus
    const statusStoreData = useStatusStore.getState().status

    // useEffect - run when route changes
    useEffect(() => {
        // if route is not present redirect
        if (!transactionId) {
            navigate("/expenses/transactions")
            return
        }
        // set form select data
        getAccData()
        getCatData()
        getFreqData()
        getTypeData()
        getStatData()

        if (transactionId == "add") {
            // add new transaction
            setFormHeading("Add New Transaction")
            setBtnText("Add")

        } else {
            // editing transaction
            setFormHeading("Edit Transaction")
            setBtnText("Edit")

            // fetch transaction data
            let transId = parseInt(transactionId)
            let trans = getTransactionById(transId)

            // runs when trans is not found
            if (!trans) {
                console.log("Failed to get transaction")
                return
            }

            // set state values
            setTransaction(trans)
            setTypeId(trans.TypeId.toString())
            setDescription(trans.description)
            setAmount(trans.amount.toString())
            setCategoryId(trans.CategoryId.toString())
            setFrequencyId(trans.FrequencyId.toString())
            setDate("2025 05 12")
            setAccountId(trans.AccountId.toString())
            setTransStatusId(trans.StatusId.toString())
        }
    }, [transactionId])

    // get account data
    const getAccData = async () => {
        if (accountsStoreData.length < 1) {
            let data = await getAccountsData()
            if (data) setAccounts(data)
        } else {
            setAccounts(accountsStoreData)
        }
    }

    // get category data
    const getCatData = async () => {
        if (categoriesStoreData.length < 1) {
            let data = await getCategoriesData()
            if (data) setCategories(data)
        } else {
            setCategories(categoriesStoreData)
        }
    }

    // get frequencies data
    const getFreqData = async () => {
        if (frequenciesStoreData.length < 1) {
            let data = await getFrequenciesData()
            if (data) setFrequencies(data)
        } else {
            setFrequencies(frequenciesStoreData)
        }
    }

    // get types data
    const getTypeData = async () => {
        if (typesStoreData.length < 1) {
            let data = await getTypesData()
            if (data) setTransTypes(data)
        } else {
            setTransTypes(typesStoreData)
        }
    }

    // get status data
    const getStatData = async () => {
        if (statusStoreData.length < 1) {
            let data = await getStatusData()
            if (data) setStatus(data)
        } else {
            setStatus(statusStoreData)
        }
    }

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
            if (!transactionId || !status) {
                console.log("missing values", transactionId, status)
                return
            }

            /// set new category
            // let newCategory = getCategoryById(categoryId)
            // set new account
            //let newAccount = getAccountById(accountId)
            // set new frequency
            // let newFrequency = getFrequencyById(frequencyId)
            // set new type
            // let newType = getTypesById(typeId)
            // set status
            // let newStatus = status.find(status => status.id == parseInt(transStatusId))

            // if no category, account, frequency, type, status
            // if (!newCategory || !newAccount || !newFrequency || !newType || !newStatus) {
            //     console.log("could not set new values")
            //     return
            // }

            if (transactionId == "add") {
                // generate new id
                let newId = Math.floor((Math.random() * 1000));
                // create new transaction
                let newTransaction: TransactionType = createTransaction(
                    newId,
                )
                //update state
                addTransaction(newTransaction)
                // redirect to transactions
                navigate("/expenses/transactions")

            } else {
                // is there is id or transaction
                if (!transaction) {
                    console.log("missing values", transaction)
                    return
                }
                // create updated transaction
                let updatedTransaction: TransactionType = createTransaction(
                    transaction.id
                )
                // update state
                updateTransaction(parseInt(transactionId), updatedTransaction)
                // redirect to transactions
                navigate("/expenses/transactions")
            }
        }

        //console.log(typeId, description, amount, categoryId, accountId, frequencyId, date)
    }

    //create new or updated transaction
    const createTransaction = (
        newId: number,
    ) => {

        let createdTransaction: any = {
            id: newId,
            description: description,
            amount: parseFloat(amount),
            CategoryId: parseInt(categoryId),
            AccountId: parseInt(accountId),
            FrequencyId: parseInt(frequencyId),
            dueDate: new Date(2025, 4, 5),
            StatusId: parseInt(transStatusId),
            TypeId: parseInt(typeId),
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
        <section className="my-5">
            <form onSubmit={HandleSubmit}
                className={`w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg border-2 ${typeId == "100a" ? "border-red-300" : "border-green-300"}`}
            >
                <p className="text-2xl text-center mb-8 capitalize">{formHeading}</p>

                <section className="w-[80%] mx-auto">
                    {/* type */}
                    <div className="flex justify-center items-center gap-8 mb-8">
                        {
                            transType && transType.map((types) => {
                                return (
                                    <div key={types.id}>
                                        <RadioBtnComponent
                                            value={types.id.toString()}
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
                    <div className="flex justify-center items-center gap-8 mb-8">
                        {
                            status && status.map((stat) => {
                                return (
                                    <div key={stat.id}>
                                        <RadioBtnComponent
                                            value={stat.id.toString()}
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
                        <SubmitBtn btnText={`${btnText} ${typeId == "100a" ? "Expense" : "Income"}`} />
                        <CancelBtn link="/expenses/transactions" />
                    </div>
                </section>
            </form >
        </section >
    )
}

export default EditAddTransaction