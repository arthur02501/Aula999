function r(a,b){
    return a < b;
}
function j(a,b){
    return parseInt(a) + parseInt(b);
}
function cal(){
    var qtdd = prompt('Informe a quantidade de somas que serão realizadas')
    var i = 0
    var z = 0
    while(r(i, qtdd)){
        var x = prompt("Informe um número para somar");
        i++;
        console.log(x)
        z = j(z, x)
        console.log(z)
    }
    var resultado = alert('O resultado é igual a: ' + z)
}

