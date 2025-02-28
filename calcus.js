
function multiply(){
    var x = document.getElementById("firstNum").value;
    var y = document.getElementById("secondNum").value;
    //document.write(x*y);
    document.getElementById("result").innerHTML = x*y;
}
function divide(){
    var x = document.getElementById("firstNum").value;
    var y = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = x/y;
}