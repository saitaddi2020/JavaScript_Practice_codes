let colors = ["blue", "black", "pink", "patanahi","green","yellow"];
for(var x=0; x<colors.length; x++){
if (x===0){
    console.log((x+1) +"st choice is " + colors[x])
}else if(x===1){
    console.log((x+1) +"nd choice is " + colors[x])
} else if(x===2){
    console.log((x+1)+ "rd choice is "+ colors[x])

}else{
    console.log((x+1) +"th choice is " + colors[x])
}
}