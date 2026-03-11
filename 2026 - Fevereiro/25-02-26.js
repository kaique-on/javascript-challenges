function findDifferences(arr) {

    var res = []

    for(var i = 1 ; i < arr.length ; i++){
    res.push(arr[i] - arr[i-1])
    }

    res.push(0)

    return res;
}