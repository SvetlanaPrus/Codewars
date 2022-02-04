// 7 Kata - Sort with a sorting array

function sort(arrNum, arrInd) {
    const result = [];

    for (let i = 0; i < arrInd.length; i++) {
        const index = arrInd.indexOf(i);
        result.push(arrNum[index]);
    }

    return result;
}
