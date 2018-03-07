//let & const

//ES5

var name5 = 'Agustin Ruiz';
var age5 = 25;
name5 = 'Agustin';
console.log(name5);

//ES6
let name6 = 'Agustin Ruiz';
let age6 = '25';
name6 = 'Agustin';
console.log(name6);

//ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'Agustin';
        var yearOfBirth = 1992;
    }
    console.log(`${firstName}, born in ${yearOfBirth}, is now
    oficially allowed to drive a car`);
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1992;
    if (passedTest) {
        firstName = 'Agustin';
    }
    console.log(`${firstName}, born in ${yearOfBirth}, is now
    oficially allowed to drive a car`);
}

driversLicence6(true);