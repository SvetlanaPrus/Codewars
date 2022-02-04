// 6 Kata - Easy Balance Checking

function balance(str) {
    const arr = str.replace(/[!=:;?,{}]/gi, '').split('\n').filter(el => el !== '');

    for (const str of arr) {
        if (!str.includes('.')) {
            arr[arr.indexOf(str)] = arr[arr.indexOf(str)] + ".00";
        }
        let length = str.split('.').pop().length;
        if (length === 1) {
            arr[arr.indexOf(str)] = arr[arr.indexOf(str)] + "0";
        }
    }

    let expense = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            expense.push(Number(arr[i].split(' ')[2]));  // [125.45, 34.95, 7.45, 14.32, 16.1]
        }
    }

    const totalExpense = expense.reduce((prev, curr) => prev + curr, 0).toFixed(2);
    const averageExpenseText = 'Average expense  ' + (totalExpense / expense.length).toFixed(2);
    // "Average expense 39.65"

    const totalExpenseText = 'Total expense  ' + totalExpense + '\r\n';
    // "Total expense 198.27"

    let result = '', balance = Number(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result = 'Original Balance: ' + arr[i] + '\r\n';
        } else {
            balance = (balance - expense[i - 1]).toFixed(2);
            result = result + arr[i] + ' Balance ' + `${balance}` + '\r\n';
        }
    }

    result = result + totalExpenseText + averageExpenseText;
    return result;
}
