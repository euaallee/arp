let numPensado = Math.floor(Math.random() * 11)
let numEscolhido = Number(prompt("advinhe o número que estou pensando? Está entre 0 e 10: "))
let acertos = 0

for(let i = 0; i < 100; i++){
    if(numEscolhido == numPensado){
        acertos += i
        alert("Acertou!")
        break
    } else {
        numEscolhido = Number(prompt("Não foi dessa vez! Tente novamente: "))
    }
}

alert(`Parabéns! Você advinhou o número em ${acertos} tentativas`)