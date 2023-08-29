const fibonacci = function(member) {
    let firstDigit = 0;
    let secondDigit = 1;
    if (member < 0) return "OOPS";
    for (i = 0; i < member; i++) {
        let sum = firstDigit + secondDigit;
        firstDigit = secondDigit;
        secondDigit = sum;
    }
    return firstDigit;
};

// Do not edit below this line
module.exports = fibonacci;
