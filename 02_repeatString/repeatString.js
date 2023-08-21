const repeatString = function(string, num) {
    let finalResult = "";
    if (num < 0) {
        finalResult = "ERROR";
    } else {
        for (i = 1; i <= num; i++) {
            finalResult += string;
        }
    }
    return finalResult;
};

// Do not edit below this line
module.exports = repeatString;
