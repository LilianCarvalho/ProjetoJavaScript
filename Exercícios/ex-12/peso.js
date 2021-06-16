sexo = 'FEMININO'
const pesoIdeal = (altura) => {
    switch (Sexo){
        case 'MASCULINO':
            console.log(`O peso ideal para homens de altura: ${heigth.toFixed(2)} é: ${((72.7 * altura) - 58).toFixed(2)}`)
        break
        case 'FEMININO':
            console.log(`O peso ideal para mulheres de altura: ${heigth.toFixed(2)} é: ${((62.1 * heigth) - 44.7).toFixed(2)}`)
            break
        default:
            return
    }
}
