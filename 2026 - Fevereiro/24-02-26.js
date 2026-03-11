function countBusinessDays(start, end) {

    start = start.replaceAll("-", "/")
    start = new Date(start)
    end = end.replaceAll("-", "/")
    end = new Date(end)
    var dia
    var contagem = 0
    
    while(start <= end) {
    dia = start.getDay();
    if(dia !== 0 && dia !== 6){
        contagem ++
    }

    start.setDate(start.getDate() + 1)
    }

        return contagem;
}