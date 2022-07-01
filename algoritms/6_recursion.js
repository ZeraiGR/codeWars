let count = 0;
const factorial = (n) => {
	if (n === 1) {
		return 1;
	}
	count++;
	return n * factorial(n - 1);
};

// console.log(factorial(5));
// console.log(count);

// Последовательность фибоначчи - 1,1,2,3,5,8,13,21..

const fibonachi = (n) => {
	if (n === 1 || n === 2) {
		return 1;
	}

	return fibonachi(n - 1) + fibonachi(n - 2);
};

console.log(fibonachi(7));