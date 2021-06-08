function returnFirstTwoDrivers(array) {
    let newArray1 = array.slice(0, 2);
    return newArray1;
}

function returnLastTwoDrivers(array) {
    let newArray2 = array.slice(-2);
    return newArray2;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) { return fare * num };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, cb) {
    let currentDrivers = cb(arrayOfDrivers);
    return currentDrivers;
}