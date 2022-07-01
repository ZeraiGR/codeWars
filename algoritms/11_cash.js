function cashFunction(fn) {
	const cash = {};
	return function (n) {
		if (cash[n]) {
			console.log('Из кеша');
			return cash[n];
		}
		const result = fn(n);
		cash[n] = result;
		console.log('Из функции');
		return result;
	}
}
	

function factorial(n) {
	let result = 1;

	while (n !== 1) {
		result *= n;
		n -= 1;
	}

	return result;
}

const cashFactorial = cashFunction(factorial);

console.log(cashFactorial(4));
console.log(cashFactorial(2));
console.log(cashFactorial(3));
console.log(cashFactorial(1));
console.log(cashFactorial(4));
console.log(cashFactorial(5));
console.log(cashFactorial(3));
console.log(cashFactorial(4));