// 7 Kata - Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array
// containing the same strings, ordered from shortest to longest.

function sortByLength (arr) {
    return arr.sort((a,b) => a.length - b.length)
}
