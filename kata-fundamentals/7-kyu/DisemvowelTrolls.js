// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//My solution
function disemvowel(str) {
    const disemVowelStr = str
        .split('')
        .map((el) => {
            const symbol = el.toLowerCase();
            if (
                symbol == 'a' ||
                symbol == 'e' ||
                symbol == 'i' ||
                symbol == 'o' ||
                symbol == 'u'
            ) {
                el = '';
            }
            return el;
        })
        .join('');
    return disemVowelStr;
}

console.log(disemvowel('This website is for losers LOL!'));

//The best practice (OMG)
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
