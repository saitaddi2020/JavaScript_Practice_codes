var str1 = "sai arjun taddi";
var vowelList = "aeiouAEIOU";
var v = 0;
for(var x=0; x<str1.length; x++){
    if(vowelList.indexOf(str1[x]) !== -1)
        v = v+1;
} 
console.log(v);