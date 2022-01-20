function arrCheck(arr){
    return arr.every(el => Array.isArray(el));
}


// Old version -

// function arrCheck(value){
//     let count = 0;
//     for (let el of value) {
//         if (Array.isArray(el) === true) count += 1;
//     }
//     return (count === value.length)? true : false;
// }
