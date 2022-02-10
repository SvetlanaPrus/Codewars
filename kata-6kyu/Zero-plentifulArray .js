function zeroPlentiful(arr) {

    const arrayOfStrings = arr.join('').split(/[1-9,-]/g).filter(el => el !== '');

    const isLong = arrayOfStrings.every(str => str.length >= 4);

    return isLong ? arrayOfStrings.length : 0;
}
