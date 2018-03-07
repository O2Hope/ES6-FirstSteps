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

///////////////////////////////////////////////////////////////

//Blocks & IIFEs

{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

///////////////////////////////////////////////////////////////

//Strings

let firstName = 'Agustin';
let lastName = 'Ruiz';
const yearOfBirth = 1992;

function calcAge(year) {
    return 2018 - year;
}
//string template
console.log(`This is ${firstName} ${lastName}. He was born in
${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('A'));
console.log(n.endsWith('iz'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

///////////////////////////////////////////////////////////////
//Arrow Functions

const years = [1992,1998,1996,1920];

//ES5
var ages5 = years.map(function (el) {
    return 2016 - el;
});

console.log(ages5);

//ES6

let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);