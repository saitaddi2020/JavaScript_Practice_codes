var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);
if(today.getDate()>25 && today.getMonth()===11){
  xmas.setFullYear(today.getFullYear()+1);}
  var oneDay = 1000*60*60*24;
 var rem = Math.ceil((xmas.getTime()-today.getTime())/oneDay) + " Days Are remaining for Christmas!";
console.log(rem);