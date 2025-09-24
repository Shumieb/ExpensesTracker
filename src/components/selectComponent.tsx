import type { AccountType, CategoryType } from "../entityTypes/entityTypes"

interface PropTypes {
    labelText: string,
    value: string,
    setValue: (val: string) => void
    removeError: () => void
    defaultTitle: string
    optionsData: CategoryType[] | AccountType[]

}

const SelectComponent = ({
    value,
    setValue,
    removeError,
    defaultTitle,
    optionsData,
    labelText
}: PropTypes) => {
    return (
        <>
            <label className="mb-2 text-gray-500">{labelText}</label>
            <select
                className="outline-0 w-[100%] py-1 mx-auto border-b-2 border-gray-400"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={removeError}
            >
                <option value={""}>{defaultTitle}</option>
                {
                    optionsData.map(option => {
                        return (
                            <option
                                value={option.Id}
                                key={option.Id}
                            >{option.name}</option>
                        )
                    })
                }
            </select>
        </>
    )
}

export default SelectComponent