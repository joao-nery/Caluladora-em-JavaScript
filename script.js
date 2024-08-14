const inputText = document.querySelector('.text-input');
const numberBtns = document.querySelectorAll('#Number');
const clearBtn = document.querySelector('#clear')
const clearOne = document.querySelector('#clearOne');
const opBtns = document.querySelectorAll('#Operator');
const btnSum = document.querySelector('#sum');
const floorBtn = document.querySelector('#floor');
const iconDisplay = document.querySelector('.icon');
const plusAndMinus = document.querySelector('#plusAndMinus');


// Variáveis globais
let operadorAtual = '';
let operandoAtual = '';


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

floorBtn.addEventListener('click', (evt) => {
    if(evt.target){
        let floor = '.';
        let newString = inputText.innerHTML + floor;
        inputText.innerHTML = newString;
        if(newString.includes('..')){
            inputText.innerHTML = '0';
        }
    }
})

let isTrue = true

const stringMinus = '-';


plusAndMinus.addEventListener('click', (evt) => {
    operandoAtual = inputText.innerHTML;

    if(isTrue){
        inputText.innerHTML = stringMinus + operandoAtual;
    }else{
        inputText.innerHTML = operandoAtual;
        if(operandoAtual.includes('-')){
            
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

