function remainDays(date1,date2){
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    const rem = d1-d2;
    const oneDay = 1000*60*60*24;
    const left = Math.ceil(rem/oneDay);
    return left;
    
} 
var today = new Date();
var daysRemaining = remainDays("2025-08-15", today);
console.log(daysRemaining)
if(daysRemaining>50){
    console.log("Many days left for Independence Ms Mukherjee")
}else{
    console.log("Not Many Days left")
}