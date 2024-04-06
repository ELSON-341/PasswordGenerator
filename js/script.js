'use strict'
// Seleção de Elementos
const geneatePassworBtn = document.getElementById('generate-password')
const geneatedPassword = document.getElementById('generated-password')
// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return String(Math.floor(Math.random() * 10)).toString()
}

const getSymbol = () =>{
    const symbol = '(){}[];=,<>.!?+-:%$#@*&/'
    return symbol[Math.floor(Math.random() * symbol.length)]
}

console.log(getSymbol());

// Eventos
geneatePassworBtn.addEventListener('click', (e) => {
    console.log('test');
})
