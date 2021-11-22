const testArr = [4, 1, -6, 3, 7, 19, 10, 11, 5];

function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}

	return smallestIndex;
}

function selectionSort(arr) {
	const sortArr = [];
	let smallestIndex;

	for (const j of arr) {
		smallestIndex = findSmallest(arr);
		console.log(smallestIndex);
		sortArr.push(arr[smallestIndex]);
		arr.splice(smallestIndex, 1);
	}

	return sortArr;
}

// selectionSort(testArr);

console.log(selectionSort(testArr));
