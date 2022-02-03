// 6 Kata - Equal Sides Of An Array

function findEvenIndex(arr) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr.slice(0, i).reduce((prev, curr) => prev + curr, 0);
        let num2 = arr.slice(i + 1).reduce((prev, curr) => prev + curr, 0);
        if (num1 === num2) result = i;
    }

    return result;
}
