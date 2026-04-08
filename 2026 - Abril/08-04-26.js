var resposta = []

function add(n){
    if((n % 3) == 0 && (n % 5) == 0 ){
    resposta.push("FizzBuzz")
} else if ((n % 3) == 0 && (n % 5) != 0){
    resposta.push("Fizz")
} else if((n % 3) != 0 && (n % 5) == 0) {
    resposta.push("Buzz")
} else {
    resposta.push(n)
}
}

function isFizzBuzz(arr) {

    var n1
    var inicio = 0

    if(typeof(arr[0]) !== "number"){
    for(var i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
        n1 = arr[i]
        break;
        }
    }
    inicio = n1 - i
    for(var i = inicio; i < arr.length + inicio; i++){
    add(i)
    }
    }

    if(typeof(arr[0]) === "number"){
    for(var i = arr[0]; i < arr.length + arr[0]; i++){
    add(i)
    }
    }

    console.log(resposta)
    console.log(arr)

    if(JSON.stringify(resposta) === JSON.stringify(arr)){
    return true
    }else{
    return false
    }
}
