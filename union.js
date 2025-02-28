function union(arr1,arr2){
    const newArr = arr1.concat(arr2);
    const set1 = new Set(newArr);
    return [...set1];
}
console.log(union([1,1,2,2,3,3,4,5],[6,5,2,4,3,5]));