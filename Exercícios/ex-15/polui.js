const poluentes = (TotalPoluentes) => {
    if (TotalPoluentes <0,25){
        console.log('Índice de poluentes, dentro da normalidade')
    
    } else if (TotalPoluentes <0,3){
        console.log ('O 1° grupo, devera suspender as atividades imediatamente!')
    }else if (TotalPoluentes <0,5){
        console.log ('O 1° e 2° grupos deverão suspender as atividades imediatamente!')
    }else{
        console.log('Todos os grupos deverão suspender as atividades imediatamente!')
    }
}