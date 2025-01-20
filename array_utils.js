function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

function filterPositive(array) {
    return array.filter(num => num > 0);
}

function filterNegative(array) {
    return array.filter(num => num < 0);
}
