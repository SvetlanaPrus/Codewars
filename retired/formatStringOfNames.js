// retired

function list(arr) {
    if (arr.length === 1) return arr[0].name;
    const names = arr.map(el => el.name);
    const a = names.map((el, i) => i === names.length - 2 ? el + ' & ' + names[i + 1] : el + ', ');
    const b = a.pop();

    return a.join('');
}
