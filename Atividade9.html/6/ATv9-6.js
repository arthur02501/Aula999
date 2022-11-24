var conf = document.querySelector("#conf")
function u(a, b){
    return a >= b
}
function cal(){
var y = document.querySelector("#car").value;
console.log(y)
var x = document.querySelector("#pro").value;
console.log(x)
if(u(y, x)){
    alert("Saldo suficiente")
}
else{
    alert("saldo insuficiente")
}
}


