interface PropTypes {
    title: string,
    styles: string,
    amount: number
}

const TotalsCard = ({ title, styles, amount }: PropTypes) => {
    return (
        <div className="bg-white text-center rounded-md text-wrap py-4 px-2 shadow-lg">
            <p className={styles}>{amount.toLocaleString()}</p>
            <p>{title}</p>
        </div>
    )
}

export default TotalsCard