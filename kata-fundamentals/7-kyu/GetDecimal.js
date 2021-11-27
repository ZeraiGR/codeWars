// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples
// getDecimal(2.4) === 0.4;
// getDecimal(-0.2) === 0.2;

// My solution
function getDecimal(n) {
    const absNum = Math.abs(parseFloat(n)),
        res = absNum - Math.floor(absNum);

    return res === 0 ? parseFloat(res.toFixed()) : parseFloat(res);
}

// Best practice
const getDecimalBS = (n) => Math.abs((n % 1).toFixed(10));

console.log(getDecimalBS(2.4));
