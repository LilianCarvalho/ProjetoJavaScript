const verify = (ver) => {
    if (ver.indexOf('dota') === -1) {
        return "Não exista o parâmetro 'DOTA'!"
    }
    else {
        return "Existe o parâmetro 'DOTA'"
    }
}
console.log(verify("dota"))