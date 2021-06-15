
   
function clicar() {

    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let res = document.getElementById('res')
    
    if (email.value ==  0 || senha.value == 0){
        window.alert('[ERRO] Insira os dados abaixo')
    }else {
        window.prompt (`Seu email: ${email.value} sua senha: ${senha.value}`)
    }




}