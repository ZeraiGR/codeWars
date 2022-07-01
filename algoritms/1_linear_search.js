const array = [2, 3, 4, 5, 2, 1, 6, 4, 6, 7, 8, 9, 11];
let count = 0;

function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		count++;
		if (array[i] === item) {
			return i;
		}
	}
	return null;
}

console.log(linearSearch(array, 11));
console.log('count', count);

// Сложность O(n)