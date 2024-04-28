// tiles exercise

let length = 7;
let width = 42;
let tileBox = 12;

let roomSquareFeet = length * width;
let boxesMin = roomSquareFeet/tileBox;
let wiggleRoom = roomSquareFeet/tileBox * .10;
// console.log(roomSquareFeet);
// let boxesNeeded = roomSquareFeet / tileBox * wiggleRoom;
let boxesNeeded = wiggleRoom + boxesMin;
console.log(Math.ceil(boxesNeeded));
// console.log(typeof(wiggleRoom));