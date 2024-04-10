'use strict'

// selecting the Element
const generatePasswordBtn = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')

// Novas funcionalidade
const optionsDisplay = document.querySelector('#open-generate-password')
console.log(optionsDisplay);
const generateOptionsContainer = document.querySelector('#generate-options')
const lengthInpunt = document.querySelector('#length')
const letterInput = document.querySelector('#letters')
const numberInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')
const copyPassword = document.querySelector('#copy-password')

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
    const passwordLength = lengthInpunt.value

    let password = ''
    const generator = []

    if(letterInput.checked) generator.push(getLetterLowerCase, getLetterUpperCase)

    if(numberInput.checked) generator.push(getNumber)

    if(symbolsInput.checked) generator.push(getSymbol)

    if(lengthInpunt.value === 0) return

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

optionsDisplay.addEventListener('click', () => {
    generateOptionsContainer.classList.toggle('hide')
})

copyPassword.addEventListener('click', (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector('h4').innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPassword.innerText = 'Senha copiada com sucesso!'

        setTimeout(() => {
            copyPassword.innerText = 'Copiar'
        }, 1000)
    })
})
