// 6 Kata - Sort the odd

function sortArray(arr) {
    const odd = arr.filter(el => el % 2 !== 0).sort((a, b) => a - b);
    const result = [];

    for (const num of arr) {
        num % 2 !== 0 ? result.push(odd.shift()) : result.push(num);
    }

    return result;
}
