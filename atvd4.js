function listaCompras(list) {
    
    listBuy = []
    for (i = 0; i < 10; i++) {
        itens = prompt("Digite itens na lista de compras: ")
        listBuy.push(itens)
    }
    return listBuy
}
alert(listaCompras())