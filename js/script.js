'use strict'
// Seleção de Elementos
const geneatePassworBtn = document.getElementById('generate-password')
const geneatedPassword = document.getElementById('generated-password')
// Funções
const getLetterLowerCase = () => {
    console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97)); 
}

getLetterLowerCase()

// Eventos
geneatePassworBtn.addEventListener('click', (e) => {
    console.log('test');
})
