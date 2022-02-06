// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.

// Refactoring -
function twoSum(arr, num) {
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++) {

            if (arr[a] + arr[b] === num) return [a, b];
        }
    }
}

// Refactoring - (clean "sum")

// function twoSum(arr, num) {
//     for (let a = 0; a < arr.length - 1; a++) {
//         for (let b = a + 1; b < arr.length; b++) {
//
//             if (arr[a] + arr[b] === num) return [a, b];
//         }
//     }
// }

// function twoSum(arr, num) {
//     let sum = 0;
//
//     for (let a = 0; a < arr.length - 1; a++) {
//         for (let b = a + 1; b < arr.length; b++) {
//             sum = arr[a] + arr[b];
//
//             if (sum === num) return [a, b];
//         }
//     }
// }


