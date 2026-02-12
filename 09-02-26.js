function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {

var medal;
var pontuacoes = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0].sort((a, b) => b - a);
var pontuacao = Number(distancePoints + stylePoints + windComp + kPointBonus);

if(pontuacao > pontuacoes[0]) {
    medal = "Gold";
} else if (pontuacao < pontuacoes[0] && pontuacao > pontuacoes[1]){
    medal = "Silver";
} else if (pontuacao < pontuacoes[1] && pontuacao > pontuacoes[2]){
    medal = "Bronze";
} else {
    medal = "No Medal";
}

return medal;
}