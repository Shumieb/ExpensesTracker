import { useState } from "react"
import { Link } from "react-router"

const EditAddTransaction = () => {

    // state
    const [type, setType] = useState("expense")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [frequency, setFrequency] = useState("")
    const [date, setDate] = useState("2025-09-12")
    const [account, setAccount] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const categories = [
        { id: "100a", name: "Grocery Shopping" },
        { id: "200a", name: "Clothes Shopping" },
        { id: "300a", name: "Tech Shopping" },
        { id: "400a", name: "Utility Bills" },
        { id: "500a", name: "Rent/Mortgage" },
    ]

    const frequencies = [
        { id: "100a", name: "Once only" },
        { id: "200a", name: "Monthly" },
        { id: "300a", name: "Yearly" },
    ]

    const accounts = [
        { id: "100a", name: "Current" },
        { id: "200a", name: "Current 1" },
        { id: "300a", name: "Current 2" },
    ]

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
        }

        console.log(type, description, amount, category, account, frequency, date)
    }

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
                <p className="text-2xl text-center mb-12">Add New Transaction</p>

                <section className="w-[80%] mx-auto">
                    {/* type */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value={"expense"}
                                checked={type == "expense"}
                                onChange={(e) => setType(e.target.value)}
                                onFocus={removeError}
                            />
                            <label className="ms-2">Expense</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value={"income"}
                                checked={type == "income"}
                                onChange={(e) => setType(e.target.value)}
                                onFocus={removeError}
                            />
                            <label className="ms-2">Income</label>
                        </div>
                    </div>

                    {/* description */}
                    <div className="mb-8 flex flex-col">
                        <label>Description</label>
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
                        <label className="me-2">Amount</label>
                        <input
                            type="number"
                            min={0}
                            value={amount}
                            placeholder="0"
                            onChange={(e) => setAmount(e.target.value)}
                            className="border-b-2 border-gray-400 outline-0 px-1 py-0.5"
                            onFocus={removeError}
                        />
                    </div>

                    {/* category */}
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="w-[100%]">
                            <select
                                className="outline-0 w-[100%] py-1 mx-auto"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                onFocus={removeError}
                            >
                                <option value={""}>Select A Category</option>
                                {
                                    categories.map(category => {
                                        return (
                                            <option value={category.id} key={category.id}>{category.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {/* account */}
                        <div className="w-[100%]">
                            <select
                                className="outline-0 w-[100%] py-1 mx-auto"
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                onFocus={removeError}
                            >
                                <option value={""}>Select An Account</option>
                                {
                                    accounts.map(account => {
                                        return (
                                            <option value={account.id} key={account.id}>{account.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    {/* frequency*/}
                    <div className="grid grid-cols-2 gap-4 mb-16">
                        {/* frequency */}
                        <div className="w-[100%]">
                            <select
                                className="outline-0 w-[100%] py-1 mx-auto"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                onFocus={removeError}
                            >
                                <option value={""}>Select Frequency</option>
                                {
                                    frequencies.map(frequency => {
                                        return (
                                            <option value={frequency.id} key={frequency.id}>{frequency.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {/* date */}
                        <div className="flex justify-between gap-2">
                            {
                                (frequency == "2") ?
                                    <p className="pt-0.5">Start Date:</p> :
                                    <p className="pt-0.5">Date:</p>
                            }
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                onFocus={removeError}
                                className="outline-0 border-b-2 border-gray-500"
                            />
                        </div>
                    </div>

                    {/* error message */}
                    {
                        error && <p className="text-center text-lg text-red-800 mb-8 italic">{errorMsg}</p>
                    }

                    {/* submit button */}
                    <div className="flex justify-center gap-5">
                        <input
                            type="submit"
                            value="Add"
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