// 7 Kata - Alternate capitalization

function capitalize(str) {
    const arr = str.split('');

    const a = arr.map((el, i) => i === 0 || i % 2 === 0 ? el.toUpperCase() : el).join('');
    const b = arr.map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el).join('');

    return [a, b];
};
