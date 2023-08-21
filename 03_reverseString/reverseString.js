const reverseString = function(word) {
    let wordArray = [];
    for (i = 0; i < word.length; i++) {
        wordArray.unshift(word.charAt(i));
    }
    return wordArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
