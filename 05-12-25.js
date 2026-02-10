function difference(arr1, arr2) {

  const diffArr = arr1.concat(arr2).sort();
  var diff = diffArr.reduce(
  (x, y) => {
  if (x.includes(y)) {
    x.pop()
  }else{
    x.push(y);
    }
  return x;
}, []);
  
  return diff;
}