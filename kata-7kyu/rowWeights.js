// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
// where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
    if (array.length === 1) return [array[0], 0];
    if (array.length === 2) return array;

    const a = array.filter((el,i)=> i % 2 === 0).reduce((prev,curr) => prev + curr, 0);
    const b = array.filter((el,i)=> i % 2 !== 0).reduce((prev,curr) => prev + curr, 0);

    return [a, b];
}
