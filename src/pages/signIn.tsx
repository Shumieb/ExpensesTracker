import { useState } from "react"
import EmailInputComponent from "../components/UI/emailInputComponent"
import PasswordInputComponent from "../components/UI/passwordInputComponent"
import SubmitBtn from "../components/UI/submitBtn"
import { Link } from "react-router"

const SignIn = () => {

    // state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // state - error
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    // on submit
    const HandleSubmit = (e: any) => {
        // prevent auto page refresh
        e.preventDefault()

        // error check
        if (email == "") {
            setErrorMsg("Please enter an email")
            setError(true)
        } else if (password == "") {
            setErrorMsg("Please enter a password")
            setError(true)
        } else {
            // valid data
            console.log(email)

            // edit profile

            // back to profile page
            //navigate("/expenses/profile/1")
        }
    }

    // function - reset error
    const removeError = () => {
        setError(false)
        setErrorMsg("")
    }

    return (
        <main className="min-h-[80vh]">
            <form onSubmit={HandleSubmit} className="w-[60%] mx-auto bg-white mt-12 mb-14  rounded-lg text-lg pt-12 pb-14 px-6 shadow-lg">
                <p className="text-3xl text-center text-sky-900 mb-9">Sign In</p>
                <section className="px-4 mx-auto w-[80%]">
                    {/* email */}
                    <div className="mb-8 flex flex-col">
                        <EmailInputComponent
                            labelTxt="Email"
                            value={email}
                            setValue={setEmail}
                            removeError={removeError}
                        />
                    </div>
                    {/* password */}
                    <div className="mb-12 flex flex-col">
                        <PasswordInputComponent
                            labelTxt="Password"
                            value={password}
                            setValue={setPassword}
                            removeError={removeError}
                        />
                    </div>
                    {/* error message */}
                    {
                        error && <p className="text-center text-lg text-red-800 mb-8 italic">{errorMsg}</p>
                    }
                    {/* submit button */}
                    <div className="flex justify-center gap-5">
                        <SubmitBtn btnText="Sign In" />
                    </div>
                    <div className="mt-8 flex justify-center items-center gap-2 text-sky-900">
                        <p>Don't have an account?</p>
                        <Link to={"/sign-up"}
                            className="font-bold underline decoration-sky-900"
                        >Sign Up today</Link>
                    </div>
                </section>
            </form>
        </main>
    )
}

export default SignIn