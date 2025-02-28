function true_false(arr){
    const answer = [];
    for(x=0; x<arr.length; x++){
        if(arr[x]){
            answer.push(arr[x])
        }
    } return answer;
}
console.log(true_false([4,2,0,5,'',"","arjun", null, false,8,undefined,"shreyoshi", true]))