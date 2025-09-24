
interface PropTypes {
    btnText: string
}

const SubmitBtn = ({ btnText }: PropTypes) => {
    return (
        <>
            <input
                type="submit"
                value={btnText}
                className="bg-sky-900 w-[30%] text-white text-lg py-2 px-4 rounded-lg cursor-pointer shadow-md hover:shadow-2xl"
            />
        </>
    )
}

export default SubmitBtn