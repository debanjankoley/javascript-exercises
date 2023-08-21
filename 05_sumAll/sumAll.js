const sumAll = function(startNum, endNum) {
    let totalSum = startNum;
    if ( typeof(startNum) && typeof(endNum) !== "number") {
        return "ERROR";
    }
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }
    if (startNum < endNum) {
        for (i = startNum + 1; i <= endNum; i++) {
            totalSum += i;
        }
    } else if (startNum > endNum) {
        for (j = startNum - 1; j >= endNum; j--) {
            totalSum += j;
        }
    }
    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
