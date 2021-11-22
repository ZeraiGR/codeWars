// describe("Tests", () => {
//   it("test", () => {
// some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

//   });
// });

// My solution

let walk = ['n','w','w','s','s','e','e','e','n','w'];

function isValidWalk(walk) {
	let b = 0,
		a = 0;
	let countedWalk = walk.map(function countWalk(cur, i, w) {
		switch (cur) {
			case 'n': a = 1; b = 0; break;
			case 's': a = -1; b = 0; break;
			case 'e': a = 0; b = 1; break;
			case 'w': a = 0; b = -1; break;
			default: a = 0; b = 0; break;
		}
		let cell = [a, b];
		return cell;
	});

	if (countedWalk.length == 10) {

		let sumX = 0;
		let sumY = 0;

		for (const num of countedWalk) {
			sumX += num[0];
			sumY += num[1];
		}

		return sumX == 0 && sumY == 0;
	}

	return false;
}

console.log(isValidWalk(walk));

// ---------------------------------------------------

// Best practice

function isValidWalkBS(walk) {
	var dx = 0;
	var dy = 0;
	var dt = walk.length;

	for (var i = 0; i < walk.length; i++) {
		switch (walk[i]) {
			case 'n': dy--; break;
			case 's': dy++; break;
			case 'w': dx--; break;
			case 'e': dx++; break;
    	}
	}

	return dt === 10 && dx === 0 && dy === 0;
}

console.log(isValidWalkBS(walk));

// Clever

function isValidWalkCL(walk) {
	function count(val) {
		return walk.filter(function(a){return a==val;}).length;
	}
	return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

console.log(isValidWalkCL(walk));