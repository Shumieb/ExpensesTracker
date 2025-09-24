import img from "../../assets/imgs/placeholder.jpg"
import { getMonthText } from "../../utils/helperFunctions"

interface PropType {
    month: number
}

const CategoryTotalsGraph = ({ month }: PropType) => {

    let monthText = getMonthText(month)

    return (
        <section className="bg-white rounded-md shadow-md py-6 px-3 mb-6">
            <p className="text-xl capitalize">Total expenses</p>
            <p className="text-gray-400 capitalize">{monthText} 2025</p>
            <div>
                <img src={img} alt="category totals" className="h-96 mx-auto" />
            </div>
        </section>
    )
}

export default CategoryTotalsGraph