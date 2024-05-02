//modify the function below to work with two or three worded names
// function parseAndDisplayName(g){
//     console.log(`Name: ${g.slice(0, 10)}`);
//     console.log(`First Name: ${g.slice(0, 5)}`);
//     console.log(`Last Name: ${g.slice(6, 10)}`);
let name = "Toi Girl Ramey";

function parseAndDisplayName(g){
    let spacePos = g.indexOf(" ");
    let spacePos2 = g.lastIndexOf(" ");
    console.log(`Name: ${g}`);
    console.log(`First Name: ${g.slice(0, spacePos)}`);
    console.log(`Middle Name:${g.slice(spacePos, spacePos2)}`);
    console.log(`Last Name:${g.slice(spacePos2, -1)}${g.slice(-1)}`);
}
parseAndDisplayName("Jamie Quagsire Popper");

// for(let i = g.indexOf(" "), i )