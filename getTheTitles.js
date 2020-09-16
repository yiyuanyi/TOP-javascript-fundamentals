const getTheTitles = function(array) {
    const bookTitles = array.map(array => array.title);
    return bookTitles;
}

module.exports = getTheTitles;
