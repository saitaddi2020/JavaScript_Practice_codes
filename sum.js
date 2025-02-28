function sum(arr){
    var y=0;
    for(x=0; x<arr.length; x++ ){
        
        y += arr[x];
       
    }
    return y;
}
console.log(sum([4,5,6,3]));