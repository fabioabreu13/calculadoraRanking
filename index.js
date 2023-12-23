function calculadoraRanking(vitoria,derrota){
    let saldo = vitoria - derrota
    return saldo
}

let resultadoRanking = calculadoraRanking(100,0)

if (resultadoRanking < 10){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Ferro")
} else if (resultadoRanking >= 10 && resultadoRanking < 20){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Bronze")
} else if (resultadoRanking >= 20 && resultadoRanking < 50){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Prata")
} else if (resultadoRanking >= 50 && resultadoRanking < 80){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Ouro")
} else if (resultadoRanking >= 80 && resultadoRanking < 90){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Diamante")
} else if (resultadoRanking >= 90 && resultadoRanking < 100){
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Lendário")
}else{
    console.log("O herói tem saldo de " + resultadoRanking + " vitorias e está no nível Imortal")
}