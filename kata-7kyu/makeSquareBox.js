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
