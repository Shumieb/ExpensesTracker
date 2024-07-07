export const checkType = (array, value) => {
    let found = false
    array.map(type => {
        if (type.name == value) {
            console.log(type.name);
            found = true;
        }
    })
    return found;
}