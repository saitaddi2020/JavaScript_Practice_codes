var x = [-4,5,8,6,-1,-6,9];
console.log(x.sort((a,b)=> a-b));
let myColour = ["red", "blue", "green", "white", "yellow"];
console.log(myColour.sort())//ascending order
console.log(myColour.sort((a,b)=> b.localeCompare(a) ));//descending order
console.log(myColour.sort((a,b)=> a.localeCompare(b) ));//ascending order