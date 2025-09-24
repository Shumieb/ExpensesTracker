
interface PropTypes {
    btnText: string,
    del?: boolean
}

const SubmitBtn = ({ btnText, del = false }: PropTypes) => {
    return (
        <>
            <input
                type="submit"
                value={btnText}
                className={`${del ? "bg-red-800" : "bg-sky-900"} w-[30%] text-white text-lg py-2 px-4 rounded-lg cursor-pointer shadow-md hover:shadow-2xl`}
            />
        </>
    )
}

export default SubmitBtn