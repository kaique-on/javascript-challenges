function countChar(text,caractere){

  var recorrencias = text.split(caractere).length -1 ;
  return recorrencias;
}

function detectAI(text) {

if(countChar(text,"-") > 1 ||
(countChar(text,"(") > 1 && countChar(text,")") >1) ||
(text.match(/\w{7}/g)||[]).length >= 3){
  var resposta = "AI";
}else{
  var resposta = "Human";
}

  return resposta;
}