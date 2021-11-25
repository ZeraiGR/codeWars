// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//My solution

function isIsogram(str) {
    const lettersArr = str.toLowerCase().split('');
    let key = false;

    lettersArr.forEach((el) => {
        const res = str.toLowerCase().split(el);

        if (res.length > 2) {
            key = true;
        }
    });

    if (key) {
        return false;
    }

    return true;
}

console.log(isIsogram('isogram'));

// best practice

function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}

// one more

function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

// one more

function isIsogram(str) {
    var i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; ++i)
        for (j = i + 1; j < str.length; ++j)
            if (str[i] === str[j]) return false;
    return true;
}
