'use strict'
// Seleção de Elementos
const generatePassworBtn = document.getElementById('generate-password')
const generatedPassword = document.getElementById('generated-password')

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
const generatePassword = (getLetterLowerCase, getUpperCase, getNumber, getSymbol) => {
    let password = ''
    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getUpperCase,
        getNumber,
        getSymbol
    ]

    for (let i = 0; i < passwordLength; i += 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }
    password = password.slice(0, passwordLength)

    generatedPassword.style.display = 'block'
    generatedPassword.querySelector('h4').innerText = password
}

// Eventos
generatePassworBtn.addEventListener('click', () => {
    generatePassword(
        getLetterLowerCase,
        getUpperCase,
        getNumber,
        getSymbol
    )
})
