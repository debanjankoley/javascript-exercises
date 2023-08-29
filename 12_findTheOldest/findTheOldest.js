const findTheOldest = function(people) {
    people.forEach(item => {              // this adds yearOfDeath if it is missing
        if (!("yearOfDeath" in item)) {
            item.yearOfDeath = new Date().getFullYear();;
        }
    })

    let newPeopleArray = people.map(person => {
        return {name : person.name, age : person.yearOfDeath - person.yearOfBirth} 
    })
    newPeopleArray.sort((a, b) => (a.age > b.age) ? -1 : 1);
    return newPeopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
