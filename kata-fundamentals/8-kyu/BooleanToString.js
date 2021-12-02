// Implement a function which convert the given boolean value into its string representation.

// My solution
function booleanToString(b) {
    if (b === true || b === false) return b.toString();
}

booleanToString(true);

// Best practice
function booleanToStringBP(b) {
    return b.toString();
}
