
function p(a, b){
    return Math.pow(a, b)
}
function cal(){
    var x = document.querySelector("#num1").value;
    console.log(x)
    var y = document.querySelector("#num2").value;
    console.log(y)
    var xy = p(x, y)
    console.log(xy)
    alert(xy)
}