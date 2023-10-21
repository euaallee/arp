var enviar = document.getElementById('enviar');
var resultado = document.getElementById('resultado');

let listaPacientes = [];
let nomePacientes = [];

function pacientes(nome, idade, peso, altura) {
    let paciente = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura
    };
    listaPacientes.push(paciente);
    resultado = JSON.stringify(paciente);
    return resultado;
}

function nomesPacientes() {
    for (nomePaciente of listaPacientes) {
        nomePacientes.push(nomePaciente.nome);
    }
    return nomePacientes;
}

enviar.addEventListener("click", function (event) {
    let valorMenu = Number(document.getElementById('optMenu').value);
    switch (valorMenu) {
        case 1:
            let nome = prompt("Nome paciente: ");
            let idade = prompt("Idade paciente: ");
            let peso = prompt("Peso paciente: ");
            let altura = prompt("Altura paciente: ");
            lista = pacientes(nome, idade, peso, altura);
            document.getElementById('resultado').innerHTML = lista;
            break;
        case 2:
            document.getElementById('resultado').innerHTML = nomesPacientes().join(", ");
            break;
        default:
            alert("Option Invalid!")
            break;
    }
});