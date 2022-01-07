// Your task is to complete the function which takes a string, and returns an array
// with all possible rotations of the given string, in uppercase. scrollingText("codewars") should return:
// [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA", "SCODEWAR" ]


function scrollingText(string) {   // Input: "abc"
    let str = string.toUpperCase();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str);
        str = str.substr(1) + str.substr(0, 1);
    }

    return result;
}
