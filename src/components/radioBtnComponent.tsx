
interface PropTypes {
    value: string,
    selectedValue: string,
    setSelectedValue: (val: string) => void,
    removeError: () => void,
    labelText: string,
    name: string
}


const RadioBtnComponent = ({ value, selectedValue, setSelectedValue, removeError, labelText, name }: PropTypes) => {
    return (
        <>
            <input
                type="radio"
                name={name}
                value={value}
                checked={selectedValue == value}
                onChange={(e) => setSelectedValue(e.target.value)}
                onFocus={removeError}
            />
            <label className="ms-2 capitalize">{labelText}</label>
        </ >
    )
}

export default RadioBtnComponent