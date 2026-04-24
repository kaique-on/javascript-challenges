function compress(str) {

    var arr = str.split(' ')
    var arrPalavras = []

    for(var i = 0; i < arr.length; i++){
    if(arrPalavras.includes(arr[i])){
        arr[i] = arr.indexOf(arr[i])+1
    }else{
        arrPalavras.push(arr[i])
    }}

    arr = arr.join(" ")

    return arr;
}