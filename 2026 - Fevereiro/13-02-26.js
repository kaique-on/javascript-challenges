function getFastestSpeed(times) {

  var velocidades = [];
  var segmentos = [320, 280, 350, 300, 250];

  for(var i = 0 ; i < segmentos.length ; i++){
    velocidades.push(segmentos[i] / times[i]);
  }

  var maxima = Math.max(...velocidades);
  var colocacao = velocidades.indexOf(maxima)+1;

  return "The luger's fastest speed was "+maxima.toFixed(2)+" m/s on segment "+colocacao+".";
}