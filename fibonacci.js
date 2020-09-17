const fibonacci = function(num) {
    //always have 0,1 and allows us to calculate prev numbers
    let fib = [0,1];
    if (num < 0) {
        return "OOPS";
    } else {
    for (i = 2; i < num + 1; i++) {
        fib.push(fib[i-2] + fib[i-1])
    }
    return fib[num];
}
}

module.exports = fibonacci
