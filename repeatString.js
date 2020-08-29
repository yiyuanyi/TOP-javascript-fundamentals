const repeatString = function(greeting, num) {
    if (num < 0) return "ERROR";
    let i = 0;
    let str = "";
    while (i < num) {
        str += greeting;
        i++;
    }
    return str;
}

module.exports = repeatString
