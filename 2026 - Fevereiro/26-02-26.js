function countLettersAndNumbers(str) {
    var letters = 0
    var numbers = 0
    var resposta1
    var resposta2

    for(var i = 0; i < str.length ; i++ ){
    if(/[a-zA-Z]/.test(str[i]) == true){
        letters += 1;
    } else if (/\d/.test(str[i]) == true) {
        numbers += 1;
    }
    }

    if(letters == 1){
    resposta1 = `The string has ${letters} letter`
    } else {
    resposta1 = `The string has ${letters} letters`
    }

    if(numbers == 1){
    resposta2 = ` and ${numbers} number.`
    } else {
    resposta2 = ` and ${numbers} numbers.`
    }

    return resposta1 + resposta2;
}