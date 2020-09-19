const caesar = function(str, num) {
    
    let startArr = [];
    let shiftedArr = [];
    let shiftedStr = [];
    
    for (i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i);
        startArr.push(charCode);

        let shiftedCharCode;

        if (65 <= charCode <= 90 || 97 <= charCode <= 122) {
            shiftedCharCode = charCode + num;
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