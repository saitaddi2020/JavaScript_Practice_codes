function largest(num){
const numb = num.sort((a,b)=>b-a);
var len = numb.length;


const largeNum = numb[0];
return largeNum;

}

console.log(largest([5,8,66,22,3]));


