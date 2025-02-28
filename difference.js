function difference(arr){
    const sorted = arr.sort((a,b)=>a-b)
    const num = (sorted[sorted.length-1])-sorted[0]
    return num;
} console.log(difference([4,6,8,20,3,1]));