function firstCaps(str){
    let firstLetter= [];
    const arr = str.split(' ');
    for(let x=0; x<arr.length; x++){
    firstLetter[x] = arr[x].charAt(0).toUpperCase() + arr[x].slice(1);
}   const combine = firstLetter.join(' ')
return combine;
} console.log(firstCaps("my name is arjun"));