// void
// retorno

/*    
var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')


var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados.')

function calcularAreaTerreno(largura, comprimento) {
            
    // lógica
    var area = largura * comprimento

    return area

}
*/
        
/*
function soma (a, b) {
    // b = b === undefined ? 0 : b
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) // não considera os parâmetros adicionais
console.log(soma(7))
console.log(soma())
*/

function soma() {
    var resultado = 0

    for (var i in arguments) {
        resultado += arguments[i]
    }

    return resultado
}

console.log(soma(7, 5, 3.2, 0.8, 'Texto'))