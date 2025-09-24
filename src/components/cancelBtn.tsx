import { Link } from "react-router"

interface PropTypes {
    link: string
}

const CancelBtn = ({ link }: PropTypes) => {
    return (
        <>
            <Link to={link}
                className="bg-gray-500 text-white w-[30%] text-center text-lg block shadow-md py-2.5 px-4 rounded-lg cursor-pointer hover:shadow-2xl"
            >
                Cancel
            </Link>
        </>
    )
}

export default CancelBtn