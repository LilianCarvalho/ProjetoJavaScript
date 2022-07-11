var num = document.getElementById('ns')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valor = []

//Preciso trocar var pro let, mas quando tento trocar. Tudo para de funcionar!!!

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        window.alert('Valor invalido')
    }
}

function lista (n, l){
    if (lista (Number (n))  ){
        return true
    
    } else {
        return false
    }

}

function adicionar(){
    if (numero (num.value) ) {
        valor.push (Number (num.value))
        var item = document.createElement('option')
        item.text= `${num.value}`
        lista.appendChild (item)
    } else {
        window.alert('Valor invalido')
    }
    num.value = '' //Para apagar o n° digitado, apos ser add na lista
    num.focus() // Para colocar o foco no lugar da escrita
}

function finalizar() {
    let maior = valor[0]
    let menor = valor [0]
    for (let por in valor) {
        if (valor [por] > maior)
            maior = valor [por]
        if (valor [por] < menor)
            menor = valor [por]
    }
    res.innerHTML += `<p> O maior valor foi ${maior}`


}