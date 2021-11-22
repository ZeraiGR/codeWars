const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// O(log2n)
function binarySearch(sortArr, target) {
	let low = 0,
		high = sortArr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2),
			guess = sortArr[mid];
				
		if (guess === target) {
			return mid;
		}

		if (guess > target) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
}

console.log(binarySearch(testArr, 13)); // 12


// сколько итераций потребуется, чтобы найти нужный элемент в массиве длиной 256
console.log(Math.log2(256));