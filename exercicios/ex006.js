function juroSimples(capitalInicial, taxaDeJuros, tempoDeAplicação){
    simples = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicação)
    return simples
}

function juroComposto(capitalInicial, taxaDeJuros, tempoDeAplicação){
    composto = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação
    return composto
}

console.log(juroSimples(1000, 0.1, 2))
console.log(juroComposto(1000, 0.1, 2))