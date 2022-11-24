function ad(a ,b ,c , d){
    return parseInt(a) + parseInt(d) + parseInt(c) + parseInt(d);
}
function conf(){
    const x = document.querySelector("#nu1").value;
    console.log(x)
    const y = document.querySelector("#nu2").value;
    console.log(y)
    const z = document.querySelector("#nu3").value;
    console.log(z)
    const u = document.querySelector("#nu4").value;
    console.log(u)
    var calc1 = ad(x, y, z, u);
    var calc2 = calc1/4;
    console.log(calc1)
    console.log(calc2)
    alert('A soma dos números é: ' + calc1 + '\n' + 'A média dos números é: ' + calc2) 
    }