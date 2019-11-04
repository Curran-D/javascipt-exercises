function add (x,y) {
	return x+y
}

function subtract (x,y) {
	return x-y;
}

function sum (array) {
	let total = 0;
	array.forEach(number => total += number);
	return total;
}

function multiply (array) {
	let total = 1;
	array.forEach(number => total *= number);
	return total;
}

function power(x,n) {
	return (x**n);
}

function factorial(x) {
	if (x===0){
		return 1
	}
	let total = 1;
	for (let i = x; i > 0; i--){
		total *= i;

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