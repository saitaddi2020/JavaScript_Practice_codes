function small(arr){
   const sortArray = arr.sort((a,b) => a-b);
   return sortArray[0];
} 
console.log(small([55,22,88,11,66,198]));