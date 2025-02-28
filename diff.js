function differnceDate(date1, date2){
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();

 const differnceof = Math.abs(d1-d2);
 var oneDay = 1000*60*60*24;
 const differnce = Math.ceil(differnceof/oneDay);
 return differnce;
}
console.log(differnceDate("2022-11-08","2024-03-26"));