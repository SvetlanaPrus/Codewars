function cake(num, str) {
    const obj = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11,
        'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21,
        'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    }

    const fall = num * 70 / 100;
    const arr = str.split('');

    const even = arr.filter((el, i) => i % 2 === 0).map(el => el.charCodeAt(0));
    const odd = arr.filter((el, i) => i % 2 !== 0).map(el => obj[el]);

    let result = even.reduce((prev, curr) => prev + curr, 0);
    result = odd.reduce((prev, curr) => prev + curr, result);

    return result > fall ? 'Fire!' : 'That was close!';
}
