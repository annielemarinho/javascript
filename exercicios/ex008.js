function pontuacoes(string){
    let pontos = string.split(" ").map(Number)

    let melhorPontuacao = pontos[0]
    let piorPontuacao =pontos[0]
    let qtdRecordes = -1
    let jogoDoPior = 1 

    for(let i = 1; i < pontos.length; i++) {
        if(pontos[i] > melhorPontuacao) {
            melhorPontuacao[i]
            qtdRecordes++
        }
        if(pontos[i] < piorPontuacao) {
            piorPontuacao = pontos[i]
            jogoDoPior = i + 1
        }
    }

    return [qtdRecordes, jogoDoPior]
}

console.log(pontuacoes("10 20 20 8 25 3 0 30 1"))