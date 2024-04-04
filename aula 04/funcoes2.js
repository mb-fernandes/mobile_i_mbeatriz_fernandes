const TesteImparPar = (n) => {
    let CalculoTeste = n % 2

    if (CalculoTeste == 1){
        return "Número impar"
    } else {
        return "Número par"
    }
}

console.log(TesteImparPar(17))
console.log(TesteImparPar(64))
console.log(TesteImparPar(1500))
console.log(TesteImparPar(3))