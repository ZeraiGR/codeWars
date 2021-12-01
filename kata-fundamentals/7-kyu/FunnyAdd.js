// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Example
// 16+18=214

function add(num1, num2) {
    function getReadyNum(num) {
        return num.toString().split('').reverse();
    }

    let numToStr = [num1, num2],
        maxNum = getReadyNum(Math.max(...numToStr)),
        minNum = getReadyNum(Math.min(...numToStr)),
        sum = '';

    for (let i = 0; i < maxNum.length; i++) {
        if (minNum[i] === undefined) {
            minNum[i] = 0;
        }

        let sumChar = parseInt(maxNum[i]) + parseInt(minNum[i]);
        sum += sumChar.toString().split('').reverse().join('');
    }

    sum = parseInt(sum.split('').reverse().join(''));
    console.log(sum);

    return sum;
}

add(16, 18);
