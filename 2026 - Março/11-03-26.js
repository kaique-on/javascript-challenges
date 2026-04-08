function convertWords(str) {
    
    var res = []
    str = str.split(' ')

    for(var i = 0; i < str.length; i++){
    res.push(str[i].length)
    }
    res = res.join(' ')
    
    return res;
}