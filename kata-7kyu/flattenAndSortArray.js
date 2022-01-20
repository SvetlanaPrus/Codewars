// Given a two-dimensional array of integers,
// return the flattened version of the array with all the integers in the sorted (ascending) order.

"use strict";

function flattenAndSort(arr) {
    const result = arr
        .reduce((acc, val) => acc.concat(val), [])
        .sort((a, b) => a - b);

    return result;
}

// Version 2 -
// "use strict";
//
// function flattenAndSort(arr) {
//     return [].concat(...arr).sort((a,b) => a - b);
// }
