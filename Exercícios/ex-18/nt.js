var notas = [2 , 3, 5]

function media(notas) {
    let soma = 0
    for (var nota of notas){
        soma += nota
    }
    let media = soma/3
    
    if (media < 5){
     return "REPROVADO"
    }else{
     return "APROVADO"
    }

}
