const removeFromArray = function(array) {
    
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);
            }
        }
    }
return array;
}
module.exports = removeFromArray
