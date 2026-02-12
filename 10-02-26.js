function getRelativeResults(results) {

  var h1 = Number(results[0].split(':')[0]) * 3600;
  var m1 = Number(results[0].split(':')[1]) * 60;
  var s1 = Number(results[0].split(':')[2]);
  var retorno = []

  for(var item of results){
  
  var particoes = item.split(':');

    var h2 = Number(particoes[0] * 3600);
    var m2 = Number(particoes[1] * 60);
    var s2 = Number(particoes[2]);

    var t_segundos = (h2+m2+s2)-(h1+m1+s1);

    var m = 0
    console.log(t_segundos);
    if(t_segundos>=60){
      m = t_segundos / 60;
    }
    var s = t_segundos % 60;
    
    if(m == 0 && s == 0){
      retorno.push("0");
    }else{
      retorno.push("+"+Math.floor(m)+":"+String(s).padStart(2, '0'));
    }
  }

  return retorno;
}
