var date = new Date();
var dd = date.getDate();
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();
var time = date.getUTCDate();
if (dd<10){
    dd="0"+dd;
}
if (mm<10){
    mm="0"+mm;
}
var todayDate = dd +"-"+mm +"-"+yyyy;
var rDate = mm +"-"+dd +"-"+yyyy;
var ydate = yyyy +"-"+mm +"-"+dd;
console.log(todayDate);
console.log(rDate);
console.log(ydate);
console.log(time);
