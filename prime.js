function isPrime(num){
    var c =0;
    if (num<=1){
        return "nonprime"
    }
    for(i=1; i<=num; i++){
        if(num%i ===0){
            c++;
        }
    }
        if (c===2){
        return "Prime";
            } else{
                return  "nonprime";
            }
        }
        console.log(isPrime(0))
    

