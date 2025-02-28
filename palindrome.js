function palindrome(str){
    const pal = str.split('').reverse().join('');
    if(pal === str){
        return true;
    }  else{
        return false;
    }
    
}
console.log(palindrome("fafa"))
