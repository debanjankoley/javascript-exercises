const removeFromArray = function(arrayArgument , ...removeItems) {
    let newArray = [];
    for (i = 0; i < arrayArgument.length; i++) {
        newArray.push(arrayArgument[i]);
        for (j = 0; j < removeItems.length; j++) {
            if (arrayArgument[i] === removeItems[j]) {
                newArray.pop();
            }
        }
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
