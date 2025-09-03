function conversor(valor) {
    let formatado = valor.toFixed(2)
    formatado = formatado.replace(".", ",")

    return "R$" + formatado
}

console.log(conversor(0.30000000000000004))