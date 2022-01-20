// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// n = 3  =>  ['---','- -','---']

function box(num) {
    const fullStr = Array(num).fill('-').join('');
    if (num === 2) return [fullStr, fullStr];

    const result = [];

    const emtyStr = Array(num - 3);
    emtyStr.push('-');
    emtyStr.unshift('-');

    for (let i = 0; i < num; i++) {
        if (i === 0 || i === num - 1) {
            result.push(fullStr);
        } else {
            result.push(emtyStr.join(' '));
        }
    }
    return result;
}

// Version 2 -
// function box(num){
//     const result = [];
//
//     const fullStr = '-'.repeat(num);  // str
//     const emptyStr = `-${' '.repeat(num-2)}-`;
//
//     for(let i = 0; i < num; i++){
//         if(i === 0 || i === num-1){
//             result.push(fullStr);
//         } else {
//             result.push(emptyStr);
//         }
//     }
//
//     return result;
// }


// Version 3 -
// function box(num) {
//     const fullStr = '-'.repeat(num);  // str
//     const emptyStr = `-${' '.repeat(num - 2)}-`;
//     const result = Array(num - 2).fill(emptyStr);
//
//     result.push(fullStr);
//     result.unshift(fullStr);
//
//     return result;
// }


// Version 4 -
// function box(num) {
//     const fullStr = '-'.repeat(num);
//     const emptyStr = `-${' '.repeat(num-2)}-`;
//
//     // pay attention to how the array (created along the way) is expanded...
//     return [fullStr, ...Array(num-2).fill(emptyStr), fullStr];
// }
