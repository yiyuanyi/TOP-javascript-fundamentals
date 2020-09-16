let total = 0;

function add(a, b) {
	total = a + b;
	return total;
}

function subtract(a, b) {
	total = a - b;
	return total;
}

function sum(array) {
	total = array.reduce((a,b) => a + b, 0);
	return total;
}

function multiply(array) {
		total = array.reduce((a,b) => a * b);
		return total;
}

function power(a,b) {
	total = a ** b;
	return total;
}

function factorial(x) {
	if ( x === 0 || x === 1) {
		total = 1;
	}
	for (let i = x - 1; i >= 1; i--) {
		x = x * i;
		total = x;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}