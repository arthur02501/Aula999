function par(a, b){
   return a <= b;
}
function par2(a){
    return a % 2 != 0;
}
function cal(){
    var x = document.querySelector("#num1").value;
    console.log(x)
    var y = document.querySelector("#num2").value;
    console.log(y)

    while(par(x, y)){
        if(par2(x))
        alert(x)
        console.log(x)
        x++
}
}