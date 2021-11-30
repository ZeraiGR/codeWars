// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution (Best practice)
function reverseWords(str) {
    str = str
        .split(' ')
        .map((el) => {
            el = el.split('').reverse().join('');
            return el;
        })
        .join(' ');
    return str;
}

reverseWords('double  spaces');
