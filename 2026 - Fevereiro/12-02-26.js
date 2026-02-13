function largestDifference(skater1, skater2) {
    
let diferencas = [];

for (let i = 0; i < skater1.length; i++) {
    diferencas.push(Math.abs(skater1[i] - skater2[i]));
}

let maiorNum = diferencas.indexOf(Math.max(...diferencas)) + 1;

return maiorNum;
}