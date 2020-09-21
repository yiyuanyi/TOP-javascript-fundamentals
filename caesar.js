const caesar = function(str, num) {

  let shiftedStr = [];

  for (i = 0; i < str.length; i++) {

    let charCode = str.charCodeAt(i);
   
    let lowerCase = (65 <= charCode && charCode <= 90);
    let upperCase = (97 <= charCode && charCode <= 122);
    let letterSet = lowerCase + upperCase;
    let shiftedCharCode;

    let mod = (num % 26) + charCode;

    if (letterSet && num > 25) {
      shiftedCharCode = mod - 26;
    } else if (letterSet && num < -25) {
      shiftedCharCode = mod;
    } else if (letterSet) {
      shiftedCharCode = charCode + num;
    } else {
      shiftedCharCode = charCode;
    };

    if (lowerCase && shiftedCharCode < 65 || upperCase && shiftedCharCode < 97) {
      shiftedCharCode = shiftedCharCode + 26;
    } else if (lowerCase && shiftedCharCode > 90 || upperCase && shiftedCharCode > 122) {
      shiftedCharCode = shiftedCharCode - 26;
    }

    shiftedStr += String.fromCharCode(shiftedCharCode);
  }
    return shiftedStr;
}

module.exports = caesar


