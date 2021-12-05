// Write a function called repeatStr which repeats the given string string exactly n times.

// My solution
function repeatStr(n, s) {
    let sumStr = '';
    for (let i = 0; i < n; i++) {
        sumStr += s;
    }
    return sumStr;
}

repeatStr(3, 'ha '); // "IIIIII"
repeatStr(5, 'Hello'); // "HelloHelloHelloHelloHello"

// Best practice
function repeatStrBP(n, s) {
    return s.repeat(n);
}
