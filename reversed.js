function reversed(arr){
    const reverse = [];
    for(x=arr.length-1; x>=0; x--){
        reverse.push(arr[x])
    } return reverse;
} console.log(reversed(["arjun","shreyoshi","uddalok","nilovra","hari"]));