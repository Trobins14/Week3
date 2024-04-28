//rentals calcs

let people = 38;
let vanSeats = 15;
let vanCost = 250;

let vanAmount = Math.ceil(people/vanSeats);
// console.log(Math.ceil(vanAmount));
// console.log(vanAmount);
let costPerPerson = Math.ceil((vanAmount * vanCost) / 38);
// console.log(costPerPerson.toFixed(2));
let amountCollected = costPerPerson * people;
let vanOrderCost = vanCost * vanAmount;
let leftover = amountCollected - vanOrderCost;
console.log(`Each person will have to pay $${costPerPerson}. The total amount collected was $${amountCollected}, and the vans were $${vanOrderCost}. The leftover amount is $${leftover}.`);

