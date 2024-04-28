// console.log(Number.isInteger(1900.93));
//console.log(Number.isInteger(1900/4));
let year = 1900;
let yearMath = Number.isInteger(year / 4);
if (yearMath == true) {
    console.log(`${year} is a leap year!`)
} else {
    console.log(`${year} is NOT a leap year!`)
}
