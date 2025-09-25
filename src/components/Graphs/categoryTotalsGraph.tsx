import { getMonthText } from "../../utils/helperFunctions"
import { Doughnut } from 'react-chartjs-2';
import "chart.js/auto";

interface PropType {
    month: number
}

const CategoryTotalsGraph = ({ month }: PropType) => {

    let monthText = getMonthText(month)

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'right' as const,
                labels: {
                    padding: 20,
                    font: {
                        size: 20,
                        lineHeight: 3
                    },
                    usePointStyle: true
                }
            },
            layout: {
                padding: {
                    left: 100,
                    right: 100,
                    top: 0,
                    bottom: 0
                }
            },
        }
    }



    return (
        <section className="bg-white rounded-md shadow-md pb-0 pt-6 px-3 mb-6 text-sky-900" >
            <p className="text-xl capitalize">Total expenses</p>
            <p className="text-gray-400 capitalize pb-0 mb-0">{monthText} 2025</p>
            <div className="w-200 h-140 mx-auto px-3 mt-[-50px]">
                <Doughnut data={data} options={options} />
            </div>
        </section >
    )
}

export default CategoryTotalsGraph