function lastDay(year,month){
   const day = new Date(year, month+1, 0).getDate();
   return day;
}
console.log(lastDay(2024,1)); //last day of March