// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array. If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.) Inputs should not be modified.


function zipWith(fn, a0, a1) {    // Input: Math.pow, [10,10,10,10], [0,1,2,3]
    const shortestArray = a0.length < a1.length ? a0 : a1;
    let result = [];

    for (const i in shortestArray) {
        result.push(fn(a0[i], a1[i]));
    }

    return result;
}
