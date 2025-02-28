var x = document.getElementById("order");
function sort(){
   var i = x.value.split("").sort().join("");
    document.write(i);
}