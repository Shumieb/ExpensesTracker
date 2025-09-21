
interface PropTypes {
    value: number,
    HandleMonthChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const DateToggle = ({ HandleMonthChange, value }: PropTypes) => {

    const months = [
        { value: 1, month: "January" },
        { value: 2, month: "February" },
        { value: 3, month: "March" },
        { value: 4, month: "April" },
        { value: 5, month: "May" },
        { value: 6, month: "June" },
        { value: 7, month: "July" },
        { value: 8, month: "August" },
        { value: 9, month: "September" },
        { value: 10, month: "October" },
        { value: 11, month: "November" },
        { value: 12, month: "December" },
    ]

    return (
        <select
            onChange={HandleMonthChange}
            value={value}
            className="text-lg bg-white py-2 px-4 shadow-sm rounded-sm text-gray-500 outline-0"
        >
            {
                months.map(month => {
                    return (
                        <option
                            value={month.value}
                            key={month.value}
                        >
                            {month.month}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default DateToggle