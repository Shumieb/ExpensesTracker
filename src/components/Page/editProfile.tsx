import { useEffect, useState } from "react"
import TextInputComponent from "../UI/textInputComponent"
import EmailInputComponent from "../UI/emailInputComponent"
import PasswordInputComponent from "../UI/passwordInputComponent"
import SubmitBtn from "../UI/submitBtn"
import CancelBtn from "../UI/cancelBtn"
import { useNavigate, useParams } from "react-router"

const EditProfile = () => {

    // route
    let params = useParams();
    let userId = params.id
    const navigate = useNavigate();

    // state
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // state - error
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    // useEffect - run when route changes
    useEffect(() => {

        if (!userId) {
            navigate("/expenses/profile/1")
            return
        }

        // fetch user details 
        // set state values

    }, [userId])

    // on submit
    const HandleSubmit = (e: any) => {
        // prevent auto page refresh
        e.preventDefault()

        // error check
        if (userName == "") {
            setErrorMsg("Please enter a userName")
            setError(true)
        } else if (email == "") {
            setErrorMsg("Please enter an email")
            setError(true)
        } else if (password == "") {
            setErrorMsg("Please select a password")
            setError(true)
        } else {
            // valid data
            console.log(userName, email)

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
        <section className="my-5">
            <form onSubmit={HandleSubmit}
                className="w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg border-2 border-gray-300"
            >
                <p className="text-2xl text-center mb-8 capitalize">Edit Profile</p>

                <section className="w-[80%] mx-auto">
                    {/* username */}
                    <div className="mb-8 flex flex-col">
                        <TextInputComponent
                            labelTxt="UserName"
                            value={userName}
                            setValue={setUserName}
                            removeError={removeError}
                        />
                    </div>
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
                        <SubmitBtn btnText="Edit Profile" />
                        <CancelBtn link="/expenses/profile/1" />
                    </div>


                </section>
            </form>
        </section >
    )
}

export default EditProfile