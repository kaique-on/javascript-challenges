function countPerfectCubes(a, b) {

    var raizes = Math.cbrt(b);
    var contagem = 0

    if(a>b){
    var c = b;
    b = a
    a = c
    } 

    for(var i = a;i <= b;i++){
    var calc = Math.cbrt(i); 
    if(Number.isInteger(calc)){
        contagem += 1;
    }
    }

    return contagem;
}

console.log(countPerfectCubes(-64, 64))