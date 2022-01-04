function insertDash(num) {
    const strArray = Array.from(num+'');
    let newArray = [];

    for ( let i = 0; i < strArray.length; i++ ) {
        if (i === strArray.length-1) {
            newArray.push(strArray[i]);
            break;
        } else if( strArray[i] % 2 !== 0 && strArray[i+1] % 2 !== 0 ) {
            newArray.push(strArray[i]+"-");
        } else {
            newArray.push(strArray[i]);
        }
    }
    return newArray.join('');
}
