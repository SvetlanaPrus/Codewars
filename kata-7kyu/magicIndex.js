// A magic index in an array is defined to be an index such that A[i] = i.

function findMagic(arr) {
    for (const i of arr) {
        if (arr[i] === i) return i;
    }
    return -1;
}
