
interface PropTypes {
    labelTxt: string,
    value: string,
    setValue: (val: string) => void,
    removeError: () => void
}

const TextInputComponent = ({ labelTxt, value, setValue, removeError }: PropTypes) => {
    return (
        <>
            <label className="mb-2 text-gray-500">{labelTxt}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border-b-2 border-gray-500 outline-0"
                onFocus={removeError}
            />
        </>
    )
}

export default TextInputComponent