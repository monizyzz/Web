var idade = prompt('Digite uma idade:')
var faixa_etaria = null

if (idade >= 0 && idade < 15) {
    faixa_etaria = 'Criança'
} else if (idade >= 15 && idade < 30) {
    faixa_etaria = 'Jovem'
} else if (idade >= 30 && idade < 60) {
    faixa_etaria = 'Adulto'
} else if (idade >= 60) {
    faixa_etaria = 'Idoso'
}

document.write(faixa_etaria)