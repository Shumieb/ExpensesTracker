import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import SubmitBtn from "../UI/submitBtn";
import CancelBtn from "../UI/cancelBtn";

const DeleteProfile = () => {

    // route
    let params = useParams();
    let userId = params.id
    const navigate = useNavigate();

    // useEffect - run when route changes
    useEffect(() => {
        // if route is not present redirect
        if (!userId) {
            navigate("/expenses/profile/1")
            return
        }
    }, [userId])

    // submit delete
    const HandleSubmit = (e: any) => {
        // prevent auto page refresh
        e.preventDefault()

        // delete user

        // back to profile page
        //navigate("/expenses/profile/1")
    }

    return (
        <section>
            <form onSubmit={HandleSubmit}
                className="w-[80%] mx-auto bg-white pt-12 pb-14 px-3 rounded-lg text-lg border-2 border-gray-300"
            >
                <p className="text-2xl text-center mb-6 capitalize">Delete</p>
                <p className="text-xl py-1 text-gray-800 text-center italic">Are you sure you want to delete your profile?</p>
                <p className="text-xl py-1 text-gray-800 text-center">Deleting your profile will delete all your transactions.</p>
                {/* submit button */}
                <div className="flex justify-center gap-5 mt-8">
                    <SubmitBtn btnText="Delete Profile" del={true} />
                    <CancelBtn link="/expenses/profile/1" />
                </div>
            </form>
        </section>
    )
}
export default DeleteProfile