// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


// my solution

var isSquare = function(n){
	return Math.sqrt(n) == Math.trunc(Math.sqrt(n));
};

console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(25));

// ------------------------------------------

// Best practices

function isSquareBP(n) {
	return Math.sqrt(n) % 1 === 0;
}

console.log(isSquareBP(0));
console.log(isSquareBP(3));
console.log(isSquareBP(25));


// One more solution

var isSquareOM = function(n){
	return Number.isInteger(Math.sqrt(n));
};