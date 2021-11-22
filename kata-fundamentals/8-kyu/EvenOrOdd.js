// The Conditions

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solutions === best practice
function EvenOrOdd(num) {
    return Math.round(num) % 2 ? 'Odd' : 'Even';
}

// test
console.log(EvenOrOdd(0));
