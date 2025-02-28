function daysCompleted(date1,date2){
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
     const complete = (d1-d2);
     var oneDay = 1000*60*60*24;
     var diff = Math.ceil(Math.abs(complete/oneDay));
     return diff;
}   
 var today = new Date()
 console.log(daysCompleted("2025-01-01", today));