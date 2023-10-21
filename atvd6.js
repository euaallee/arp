var enviar = document.getElementById('enviar');
var resultado = document.getElementById('resultado');


let listItems = [];
function cadastrarItem(nomeItem, qtdItem, dataCadastro) {
    itemCadastro = {
        itemCadastrar: nomeItem,
        qtdCadastrarItem: qtdItem,
        dataCadastar: dataCadastro
    }
    let mostrar = listItems.push(itemCadastro);
    return mostrar;
}

function mostrarItem() {
    for(let i = 0; i < listItems.length; i++){
        resultado = JSON.stringify(listItems);
        document.getElementById('resultado').innerHTML = resultado;
    }
}


enviar.addEventListener("click", function (event) {
    let valorMenu = Number(document.getElementById('optMenu').value);
    console.log(valorMenu)
    console.log(listItems)
    switch (valorMenu) {
        case 1:
            let vezes = 0
            let item = prompt("Nome do ITEM: ");
            let qtd = Number(prompt("Quantidade de ITEM: "));
            let data = prompt("Data do cadastro: ");
            if (item != "") {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert("Erro")
            }
            vezes += cadastrarItem(item, qtd, data);
            if (vezes > 1) {
                resultado = `${vezes} itens adicionados`;
            } else {
                resultado = `${vezes} item adicionado`;
            }
            document.getElementById('resultado').innerHTML = resultado;
            break;

        case 2:
            mostrarItem();
            break;
        default:
            resultado = "Nenhuma opção é valida!";
            document.getElementById('resultado').innerHTML = resultado;
            break;
    }
});