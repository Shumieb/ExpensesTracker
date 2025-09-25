export const getMonthText = (val: number) => {
    switch (val) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            return "Month Not Found"

    }
}

export const formatDate = (date: string) => {
    let dateArray = date.split("-")
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
}