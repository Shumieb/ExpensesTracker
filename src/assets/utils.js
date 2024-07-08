export const checkType = (array, value) => {
    let found = false
    array.map(type => {
        if (type.name == value) {
            found = true;
        }
    })
    return found;
}

export const filterByStatus = (value, array) => {
    let filteredData = array.filter(expense => expense.status == value);
    return filteredData;
}