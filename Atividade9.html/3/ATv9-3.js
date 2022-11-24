function t(a, b){
    return a - b
}
function cal(){
    const a = 2022
    var x = document.querySelector("#num1").value;
    console.log(x)
    var y = document.querySelector("#num2").value;
    console.log(y)
    var xy = t(a, y)
    console.log(xy)
    alert( 'Seu nome é: ' + x + '\nsua idade é: ' + xy)
}