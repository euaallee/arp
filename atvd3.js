let nomeAluno = prompt("Nome: ")
let notaAluno = Number(prompt("Insira a nota: "))

function mediaAluno(nome, nota) {
    if (nota >= 7) {
        alert(`Parabêns ${nome}! Você passou com ${nota}`)
    } else {
        alert(`Não foi dessa fez ${nome}! Você não passou com a nota ${nota}, na proxima vez você consegues. Forças guerreiro.`)
    }

}

mediaAluno(nomeAluno, notaAluno)