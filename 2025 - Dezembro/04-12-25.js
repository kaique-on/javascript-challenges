function countPermutations(str) {

var x = 1;
var nums = [1];
var numsMulti = [1];

for (let char of [... new Set(str)]){
  const qtd = str.split(char).length - 1
  if(qtd > 1) nums.push(qtd);
  console.log(nums);
}

for (var num of nums){
  if (num > 1) {
    num *= num-1;
    }
  numsMulti.push(num);
}

for (var i = str.length+1 ; i-=1 ; i == 0){
  x *= i;
}

var divisor = numsMulti.reduce((a, b) => a * b, 1);

x /= divisor;

  return x;

}