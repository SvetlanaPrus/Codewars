// 6 Kata - Duplicate Encoder

function duplicateEncode(str) {
    let result = '';
    const array = str.toLowerCase().split('');

    for (const letter of array) {
        if (array.filter(el => el === letter).length > 1) {
            result = result + ')';
        } else {
            result = result + '(';
        }
    }
    return result;
}
