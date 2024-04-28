/*
exercises
IfScripts
pay_rules.js
*/
//INPUTS
payRate = 12.50;
hoursWorked = 20;
//CONSTANTS
LIMIT = 40;
//EVALUATE EXPRESSION
isUnder = hoursWorked < LIMIT

isOver = hoursWorked > LIMIT
//MAKE A DECISION
if (isOver) {
    reason = "IS OVER LIMIT"
} else if (isUnder) {
    reason = "Is UNDER LIMIT"
} else {//EXACT
    reason = "IS EXACTLY AT LIMIT"
}
//FINAL OUTPUT
console.log(reason);