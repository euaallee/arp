const num1 = Number(prompt("Digite o valor 1: "))
const num2 = Number(prompt("Digire o valor 2: "))

function soma(num1, num2){
    let som = num1 + num2
    return som
}
function subtracao(num1, num2){
    let sub = num1 - num2
    return sub
}
function multiplicacao(num1, num2){
    let mult = num1 * num2
    return mult
}
function divisao(num1, num2){
    let div = num1 / num2
    return div
}
function resto(num1, num2){
    let rest = num1 % num2
    return rest
}

alert(soma(num1, num2))
alert(subtracao(num1, num2))
alert(multiplicacao(num1, num2))
alert(divisao(num1, num2))
alert(resto(num1, num2))