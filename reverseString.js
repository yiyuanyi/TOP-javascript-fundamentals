const reverseString = function(words) {
let splitChar = words.split("");
let reversedChar = splitChar.reverse();
let joinedChar = reversedChar.join("");
return joinedChar;
}

module.exports = reverseString
