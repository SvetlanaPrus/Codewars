// 6 Kata - Simple Fun #79: Delete a Digit

function deleteDigit(num) {
    const str = num.toString();
    let newNumber = 0, maxNumber = 0;

    for (let i = 0, l = str.length; i < l; i++) {
        const arr = str.split('');
        delete arr[i];

        newNumber = Number(arr.join(''));
        maxNumber = newNumber > maxNumber ? newNumber : maxNumber;
    }

    return maxNumber;
}
