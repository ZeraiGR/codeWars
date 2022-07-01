const arr = [0,2,3,5,6,1,8,4,2,1,2,9,6,4,1,7,-1,-5,9,6,2,23,6,3,32,35]; // [0,1,1,2,3..]
let count = 0;

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j+1] < array[j]) {
				let tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
			}
			count++;
		}
	}

	return array;
}


console.log(bubbleSort(arr));
console.log(count);

// Сложность O(n*n)