function mult(a, b){
    return a * b;
}
function cal() {
var x = document.querySelector("#num1").value;
console.log(x)
var y = document.querySelector("#num2").value;
console.log(y)
var r = mult(x, y)
console.log(r)
alert(r)   
}