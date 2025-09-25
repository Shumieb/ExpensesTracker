import img from '../../assets/imgs/placeholder2.jpg'
import { Link } from "react-router"
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

const Profile = () => {
    return (
        <section className=" bg-white py-6 px-3 rounded-lg min-h-[80vh] my-5 text-sky-900">
            <p className="text-2xl capitalize mb-6">Profile</p>
            <div className='grid grid-cols-3 gap-4 mb-6'>
                <img
                    src={img}
                    alt="profile"
                    className='rounded-md object-cover'
                />
                <div className='col-span-2 flex flex-col justify-between'>
                    <div>
                        <p className='text-xl py-1'>User Name</p>
                        <p className='text-lg'>userName@email.com</p>
                    </div>
                    <div className='flex justify-end gap-2 items-center me-2'>
                        <Link to={"/expenses/edit-profile/1"} role="button"
                            className="me-2 cursor-pointer text-sky-700 text-xl"
                        >
                            <FaPenToSquare />
                        </Link>
                        <Link to={"/expenses/delete-profile/1"} role="button"
                            className="cursor-pointer text-red-900 text-xl"
                        >
                            <FaTrashCan />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile