const inputText = document.querySelector('.text-input');
const numberBtns = document.querySelectorAll('#Number');
const clearBtn = document.querySelector('#clear')
const clearOne = document.querySelector('#clearOne');
const opBtns = document.querySelectorAll('#Operator');
const btnSum = document.querySelector('#sum');
const floorBtn = document.querySelector('#floor');
const iconDisplay = document.querySelector('.icon');
const plusAndMinus = document.querySelector('#plusAndMinus');
const porcent = document.querySelector('#porcent');

// Variáveis globais
let operadorAtual = '';
let operandoAtual = '';
let isTrue = true;
const stringMinus = '-';
const stringfloor = '.';


numberBtns.forEach((el) => el.addEventListener('click', (evt) => {
    if(evt.target){
        if(inputText.innerHTML == '0' ){
            inputText.innerHTML = '';
        }

        if(inputText.innerHTML == 'Não tem como dividir por Zero!'){
            inputText.innerHTML = '';
            inputText.style.fontSize = '54px'
        }
        inputText.innerHTML += evt.target.textContent;
    }
}));

opBtns.forEach((el) => el.addEventListener('click', (evt) => {
    if(evt.target){
        operadorAtual = evt.target.textContent;
        operandoAtual = inputText.innerHTML;
        inputText.innerHTML = '0';

        iconDisplay.innerHTML = operandoAtual + ' ' + operadorAtual;
    }
}))

btnSum.addEventListener('click', () => {
    let secondNumber = inputText.innerHTML;

    switch (operadorAtual) {
        case '+':
            inputText.innerHTML = parseFloat(operandoAtual) + parseFloat(secondNumber);
            break;
        
        case '-':
            inputText.innerHTML = parseFloat(operandoAtual) - parseFloat(secondNumber);
            break

        case '*':
            inputText.innerHTML = parseFloat(operandoAtual) * parseFloat(secondNumber);
            break

        case '/':
            inputText.innerHTML = parseFloat(operandoAtual) / parseFloat(secondNumber);
            if(operandoAtual == '0' && secondNumber == '0'){
                inputText.style.fontSize = '1.3em'
                inputText.innerHTML = 'Não tem como dividir por Zero!'
            }

            break

        default:
            break;
    }

    iconDisplay.innerHTML = '';
    
})

porcent.addEventListener('click', (evt) => {
    let secondNumber = inputText.innerHTML;


    if(evt.target){
        inputText.innerHTML = (secondNumber / 100) * operandoAtual;
        iconDisplay.innerHTML = '';
    }
})

floorBtn.addEventListener('click', () => {
    operandoAtual = inputText.innerHTML;

    if(isTrue){
        inputText.innerHTML = operandoAtual.concat(stringfloor);
    }else{
        if(operandoAtual.includes('.')){
            inputText.innerHTML = operandoAtual.slice(0, inputText.innerHTML.length -1)
        };
    }

    isTrue = !isTrue
})

plusAndMinus.addEventListener('click', () => {
    operandoAtual = inputText.innerHTML;

    if(isTrue){
        inputText.innerHTML = stringMinus.concat(operandoAtual);
    }else{
        if(operandoAtual.includes('-')){
            inputText.innerHTML = operandoAtual.slice(1)
        }
    }

    isTrue = !isTrue
}) 

clearBtn.addEventListener('click', () => {
    inputText.innerHTML = '0';
    iconDisplay.innerHTML = '';
})

clearOne.addEventListener('click', (evt) => {
    if(evt.target){
        let newString = inputText.innerHTML.slice(0, inputText.innerHTML.length -1);
        inputText.innerHTML = newString;
        if(inputText.innerHTML == ''){
            inputText.innerHTML = '0';
        }
    }
})

