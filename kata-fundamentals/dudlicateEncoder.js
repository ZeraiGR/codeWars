// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

const entryWord = 'anything';

// my solution
function duplicateEncode(word) {
	word = word.toLowerCase();
	let res = '';

	for (let i = 0; i < word.length; i++) {
		let char = word[i];

		if (word.split(char).length - 1 > 1) {
			res += ')';
		} else {
			res += '(';
		}
	}

	return res;
}

console.log(duplicateEncode(entryWord));

// -----------------------------------

// Best practices

function duplicateEncodeBP(word) {
	return word.toLowerCase().split('').map(function (a, i, w) {
		return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
	}).join('');
}

console.log(duplicateEncodeBP(entryWord));
