
interface PropTypes {
    labelTxt: string,
    value: string,
    setValue: (val: string) => void,
    removeError: () => void
}

const NumberInputComponent = ({ labelTxt, value, setValue, removeError }: PropTypes) => {
    return (
        <>
            <label className="mb-2 text-gray-500">{labelTxt}</label>
            <input
                type="float"
                min={0}
                value={value}
                placeholder="0"
                onChange={(e) => setValue(e.target.value)}
                className="border-b-2 border-gray-400 outline-0 px-1 py-0.5"
                onFocus={removeError}
            />
        </>
    )
}

export default NumberInputComponent