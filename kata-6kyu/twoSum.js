// Write a function that takes an array of numbers (integers for the tests) and a target number.
// It should find two different items in the array that, when added together, give the target value.

function twoSum(arr, num) {
    let sum = 0;

    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            sum = arr[a] + arr[b];

            if (sum === num) return [a, b];
        }
    }
}
