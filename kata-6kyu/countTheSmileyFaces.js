// return the total number of smiling faces in the array
// Valid smiley face examples: :) :D ;-D :~) ...
// Invalid smiley faces: ;( :> :} :] ...

function countSmileys(arr) {             // Input: [':D',':~)',';~D',':)']
    const eyes = [':', ';'];
    const mouth  = [')', 'D'];
    const nose = ['-', '~'];
    let count = 0;

    for (let str of arr) {
        if (str.length === 2
            && eyes.filter(el => str.includes(el)).length === 1
            && mouth.filter(el => str.includes(el)).length === 1) {
            count++;
        } else if (str.length === 3
            && eyes.filter(el => str.includes(el)).length === 1
            && mouth.filter(el => str.includes(el)).length === 1
            && nose.filter(el => str.includes(el)).length === 1) {
            count++;
        }
    }
    return count;
}

