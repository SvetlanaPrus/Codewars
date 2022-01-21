// You get an array of arrays.If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing! You have to write a method, that return the length of the missing array.

function getLengthOfMissingArray(array) {
    if (array === null || array.length === 0) return 0;
    const sortedArray = [];

    for (const value of array) {
        if (value === null || value.length === 0) return 0;
        sortedArray.push(value.length);
        sortedArray.sort((a, b) => a - b);
    }

    for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++) {
        if (!sortedArray.includes(i)) return i;
    }
}
