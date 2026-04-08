function calculatePenaltyDistance(rounds) {

var penalidade = 0;

for(var i = 0; i < rounds.length ; i++){
  penalidade = penalidade + 5 - rounds[i];
}

  return penalidade * 150;
}