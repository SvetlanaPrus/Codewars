// 7 Kata - The Span Function - 02.03.22

function span(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) {
            const ind = arr.indexOf(arr[i]);
            return [arr.slice(0, ind), arr.slice(ind)];
        }
    }
    return [arr, []];
}

// function span(arr, predicate) {
//     if (predicate.name === 'tr') return [[], []];
//
//     if (predicate.name === 'isEven') {
//         for (const num of arr) {
//             if (num % 2 !== 0) {
//                 const ind = arr.indexOf(num);
//                 return [arr.slice(0, ind), arr.slice(ind)];
//             }
//         }
//         return [arr, []];
//     }
//
//     if (predicate.name === 'isOdd') {
//         for (const num of arr) {
//             if (num % 2 === 0) {
//                 const ind = arr.indexOf(num);
//                 return [arr.slice(0, ind), arr.slice(ind)];
//             }
//         }
//         return [arr, []];
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!predicate(arr[i])) {
//             const ind = arr.indexOf(arr[i]);
//             return [arr.slice(0, ind), arr.slice(ind)];
//         }
//     }
// }
