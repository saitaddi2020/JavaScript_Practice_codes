var str1 = "my name is sai arjun";
var strSplit = str1.split(' ');
var newArray = [];

for (var x=0; x<strSplit.length; x++){
    newArray.push(strSplit[x].charAt(0).toUpperCase()+strSplit[x].slice(1));
}
var g = newArray.join(' ');
console.log(g);
