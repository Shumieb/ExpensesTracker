interface PropTypes {
    labelTxt: string,
    value: string,
    placeholder?: string,
    setValue: (val: string) => void,
    removeError: () => void
}

const EmailInputComponent = ({ labelTxt, value, setValue, removeError, placeholder }: PropTypes) => {
    return (
        <>
            <label className="mb-2 text-gray-500">{labelTxt}</label>
            <input
                type="email"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="border-b-2 border-gray-500 outline-0"
                onFocus={removeError}
            />
        </>
    )
}

export default EmailInputComponent