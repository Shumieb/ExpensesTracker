export const checkType = (array, value) => {
    let found = false
    array.map(type => {
        if (type.name == value) {
            found = true;
        }
    })
    return found;
}