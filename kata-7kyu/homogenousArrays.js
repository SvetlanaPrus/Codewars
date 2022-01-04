// Given a two-dimensional array, return a new array which carries over only those arrays from the original,
// which were not empty and whose items are all of the same type (i.e. homogenous).

function filterHomogenous(arr) {     // Input: [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]), [[1, 5, 4], ['b']]
    let result = [];

    for (const item of arr) {
        if (item.length >= 1
            && (item.every(el => typeof el === 'number') || item.every(el => typeof el === 'string'))) {
            result.push(item);
        }
    }
    return result;
}
