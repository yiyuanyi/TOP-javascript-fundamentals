let findTheOldest = function(people) {

    let today = new Date();
    let thisYear = today.getFullYear();

    //can also use array.reduce() to apply function to each array item
    for (let i = 0; i < people.length; i++) {
        if (people[i].hasOwnProperty('yearOfDeath') == false) {
            people[i].yearOfDeath = thisYear;
        }
    }

    const oldest = people.sort(function(a, b) { 
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
      });

    return oldest[0];

}

module.exports = findTheOldest
