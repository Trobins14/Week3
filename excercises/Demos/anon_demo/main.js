
//fUNCTIONS *ARE* VALUES like 123 or "ABC"

function a(){
    console.log("a")
}
a();

const alpha = a;

alpha();
a();

let ccc = ()=>{ console.log("CCC"); };
ccc();

//one line, one input, one output
tax = amount => amount * 0.08
console.log(tax(1000));

function tax2(amount){
    return amount * 0.08;
}
console.log(tax2(1000));
//IIFE (Immediately Invoked Function Expression)
(()=>{
    var x = 123
    console.log(x)
})()

