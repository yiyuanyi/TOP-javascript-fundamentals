const palindromes = function(str) {
    let lowerStr = str.toLowerCase();
    let parsedStr = lowerStr.replace(/[^A-Za-z0-9]/g,'');
    let splitStr = parsedStr.split('');
    let reversedStr = splitStr.reverse();
    let joinedStr = reversedStr.join('');
    return parsedStr === joinedStr;
}

module.exports = palindromes
