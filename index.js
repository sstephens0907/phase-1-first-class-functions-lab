  // Code your solution in this file!
const returnFirstTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(0,2))
}

const returnLastTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(ride) {
    return function(fare) {
        return ride * fare;
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

//const fareTripler(fare) => fare(3);

/*const selectDifferentDrivers = function(selection){
    if selection = 1{
        return returnFirstTwoDrivers
    } else if selection = 2{
        return returnLastTwoDrivers;
    }
}
selectDifferentDrivers(1)*/


function selectDifferentDrivers(arrayOfDrivers, chooseBetweenDrivers) {
    return chooseBetweenDrivers(arrayOfDrivers);
}
console.log(chooseBetweenDrivers(arrayDrivers,returnFirstTwoDrivers))
console.log(chooseBetweenDrivers(arrayDrivers, returnLastTwoDrivers))

