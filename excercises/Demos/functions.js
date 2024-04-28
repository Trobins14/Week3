// FUNCTIONS - LEVEL ONE CODE ORGANIZATION AND REUSE

function add(a, b){
    //many lines possible
    const result = a + b; //calculate result
    return result;
    // return a+b; //combined the above two lines, to evaluate and return the expression without storing in a variable.
}
const output = add(6, 7); //call/invoke the function

console.log(output);//printing resuly to console/terminal.

console.log(add(6, 7)); //combined the above two lines, log immediately

console.log(add(26, 47));
console.log(add(62, 71));
console.log(add(16, 74));

function recommend(age){
    let result;
    if(age <= 8){
        result ="water"
    }else if(age <=20){
        result = "soda"
    }else if(age < 99){
        result = "martini"
    }else{
        result = "hot chocolate"
    }
    return result;
}
console.log(recommend(56));
console.log(recommend(13));
console.log(recommend(200));
console.log(recommend(3));
