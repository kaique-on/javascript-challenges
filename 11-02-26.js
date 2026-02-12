function computeScore(judgeScores, ...penalties) {

var score = judgeScores.sort((a,b) => b-a);

score.pop();
score.shift();
score = score.reduce((total, atual) => total + atual, 0);

penalties = penalties.reduce((total, atual) => total + atual, 0);

score = score - penalties;

  return score;
}