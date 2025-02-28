function intersection(arr1, arr2){
    const newArr = arr1.filter(value => arr2.includes(value));
    const set1 = new Set(newArr);
    return [...set1];
}
console.log(intersection([1,1,2,3,2,4,4,5,6], [2,4,2,6,7,5]))