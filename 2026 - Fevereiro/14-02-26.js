function getDifficulty(track) {

    var dificuldade;
    var pontos = 0;

    for(var i = -1; i < track.length-1; i++){
    console.log(track[i]+track[i+1])

    if(track[i+1] == "S"){
        pontos += 0;
    }else if(track[i+1] != "S" && (track[i] == "S" || track[i] == track[i+1])){
        pontos += 5;
    }else{
        pontos += 15;
    }
    }

    if(pontos <= 100){
    dificuldade = "Easy";
    }else if(pontos > 100 && pontos <= 200){
    dificuldade = "Medium";
    }else{
    dificuldade = "Hard";
    }

    console.log(pontos);
    return dificuldade;
}