function birthDay(date1,date2){
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    var diff = d2-d1;
    var year = 365*1000*60*60*24;
    var daysOver = Math.ceil(Math.abs(diff/year));
    return daysOver; 
}
var today = new Date();
console.log(birthDay("2002-03-26", today));