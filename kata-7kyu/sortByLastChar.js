// 7 Kata - Sort by Last Char - 03.03.22

function last(str) {
    const arr = str.split(' ');

    arr.sort(function (a, b) {
        if (a.slice(-1) < b.slice(-1)) return -1;  //сортируем строки по возрастанию
        if (a.slice(-1) > b.slice(-1)) return 1;
        return 0;  // Никакой сортировки
    })

    return arr;
}
