function longest(arr){
const arr1 = arr.split(' ')
let long=""
arr1.forEach(x => {
    if(x.length > longest.length){
        longest = x;
    }
}); return longest;
}console.log(longest("my name is shreyoshi mukherjee"))