// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

// my solution

function uniTotal(str) {
    return str
        .split('')
        .map((el) => el.charCodeAt())
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
}

console.log(uniTotal('dede'));

// best practice

const uniTotalBP = (str) =>
    [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// one more

function uniTotalBP2(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count += str.charCodeAt(i);
    }
    return count;
}
