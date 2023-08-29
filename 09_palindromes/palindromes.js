const palindromes = function (string) {
    let text = string.toLowerCase();
    let array = text.split('');
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '!' || array[i] === ',' || array[i] === ' ' || array[i] === '.') {
            continue;
        } else {
            newArray.push(array[i]);
        };
    }
    let straightString = newArray.join('');
    let reverseString =  newArray.reverse().join('');
    console.log(reverseString)
    console.log(straightString)
    return (straightString === reverseString)
};

// Do not edit below this line
module.exports = palindromes;
