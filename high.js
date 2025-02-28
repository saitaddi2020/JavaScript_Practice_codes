function show(){
    var x = parseInt(document.getElementById("firstNum").value);
    var y = parseInt(document.getElementById("secondNum").value);
    if(x>y){
        document.getElementById("showIt").innerHTML = x;
    } else{
        document.getElementById("showIt").innerHTML = y;
    }
}

