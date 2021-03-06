//Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// 11111111  00000000  00001111  10101010
//
// should become:
// 10101010  00001111  00000000  11111111

// The total number of bits will always be a multiple of 8.
// The data is given in an array as such: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


// Refactoring -
function dataReverse(data) {
    const array = [];

    for (let i = 0; i < data.length; i += 8) {
        array.unshift(...data.slice(i, i + 8));
    }

    return array;
}


// function dataReverse(data) {
//     const array = [];
//
//     for (let i = 0; i < data.length; i = i + 8) {
//         array.push(data.slice(i, i + 8));
//     }
//
//     array.reverse();
//     // return array.flat();   // It doesn't work
//
//     return [].concat(...array);
// }
