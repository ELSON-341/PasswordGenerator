'use strict'

// selecting the Element
const generatePasswordBtn = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')

// funtions
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => Math.floor(Math.random() *  10)

const getSymbol = () => {
    const symbol = '(){}[];=,<>.!?+-:%$#@*&/'
    return symbol[Math.floor(Math.random() * symbol.length)]
}

const passwordGenerator = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    const passwordLength = 10

    let password = ''
    const generator = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(let i = 0; i < passwordLength; i += generator.length) {
        generator.forEach(() => {
            const randomValue = generator[Math.floor(Math.random() * generator.length)]()
            password += randomValue
        })
    }
    password = password.slice(0, passwordLength)
    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('h4').innerText = password
}
// events
generatePasswordBtn.addEventListener('click', () => {
    passwordGenerator(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})
