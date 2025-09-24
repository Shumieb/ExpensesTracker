
interface PropTypes {
    date: string,
    setDate: (val: string) => void,
    removeError: () => void
}

const DateInputComponent = ({ date, setDate, removeError }: PropTypes) => {
    return (
        <>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={removeError}
                className="outline-0 border-b-2 border-gray-500"
            />
        </>
    )
}

export default DateInputComponent