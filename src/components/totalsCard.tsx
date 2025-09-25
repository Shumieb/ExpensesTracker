interface PropTypes {
    title: string,
    styles: string,
    amount?: number,
    borderStyle: string
}

const TotalsCard = ({ title, styles, amount, borderStyle }: PropTypes) => {
    return (
        <div className={`bg-white text-center rounded-md text-wrap py-4 px-2 shadow-lg border-1 ${borderStyle}`}>
            <p className={styles}>{amount?.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}</p>
            <p className="text-sky-900">{title}</p>
        </div>
    )
}

export default TotalsCard