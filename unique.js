var arr = ["ram", "arjun","ram", "vijay", "ajay", "arjun"];
function removeDuplicates(){
let unique = [];
arr.forEach(element=>{
    if(!unique.includes(element)){
        unique.push(element)
    }
}); return unique;
} console.log(removeDuplicates())