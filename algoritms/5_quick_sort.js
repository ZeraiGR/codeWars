const arr = [0,2,3,5,6,1,8,4,2,1,2,9,6,4,1,7,-1,-5,9,6,2,23,6,3,32,35]; // [0,1,1,2,3..]
let count = 0;

function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex];
	let less = [];
	let greater = [];

	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex) {
			continue;
		} else if (array[i] < pivot) {
			less.push(array[i]);
		} else {
			greater.push(array[i]);
		}
		count++;
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
}


console.log(quickSort(arr));
console.log(count);

// Сложность O(log*n)