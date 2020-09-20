const caesar = function(str, num) {
    
    let startArr = [];
    let shiftedArr = [];
    let shiftedStr = [];
    
    for (i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i);
        startArr.push(charCode);

        let shiftedCharCode;

        if (65 <= charCode && charCode <= 90 && num > 25|| 97 <= charCode && charCode <= 122 && num > 25) {
            shiftedCharCode = (num % 26) + charCode - 26;
        } else if (97 <= charCode && charCode <= 122 && num < -25 || 65 <= charCode && charCode <= 90 && num < -25) {
            shiftedCharCode = (num % 26) + charCode;
        } else if (65 <= charCode && charCode <= 90 || 97 <= charCode && charCode <= 122) {
            shiftedCharCode = charCode + num;
        } else {
            shiftedCharCode = charCode;
        };

        if (65 <= charCode && charCode <= 90 && shiftedCharCode < 65 || 97 <= charCode && charCode <= 122 && shiftedCharCode < 97) {
            shiftedCharCode = shiftedCharCode + 26;
        } else if (65 <= charCode && charCode <= 90 && shiftedCharCode > 90 || 97 <= charCode && charCode <= 122 && shiftedCharCode > 122) {
            shiftedCharCode = shiftedCharCode - 26;
        }
        
        shiftedArr.push(shiftedCharCode);

        shiftedStr += String.fromCharCode(shiftedCharCode);
        
    }
    return shiftedStr;
}

module.exports = caesar

//alphabet variable
//split str in to array
//return each str character unicode value
//shift str character unicode value by shift factor num
//if str index > 25, return str index - 25
//return shifted str character
//join shifted str together
//return joint shifted str

// shiftedCharCode = (num % 26) + charCode - 26;

