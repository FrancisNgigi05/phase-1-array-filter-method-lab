// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(arrayOfDrivers, name) {

    const mathicgResult = arrayOfDrivers.filter(function (dirverName) {
        return (dirverName.toLowerCase() === name.toLowerCase());
    })

    return (mathicgResult);
}

const driversResult = findMatching(drivers, 'Bobby');

console.log(result);

function fuzzyMatch(arrayOfDrivers, letters) {
    const matchingResult = arrayOfDrivers.filter(function (dirverName) {
        return (dirverName.toLowerCase().startsWith(letters.toLowerCase()));
    })

    return (matchingResult);
}

const driversProperty = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function matchName(arrayOfDrivers, stringName) {
    const matchingResult = arrayOfDrivers.filter(function (driverName) {
        return (driverName.name === stringName);
    })

    return (matchingResult);
}