function sorting(arr){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    } return arr;
}
console.log(sorting([5,9,66,3,88]));