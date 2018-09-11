let checkPlus = document.getElementById('plus');
let checkMinus = document.getElementById('minus');
let checkMultipliy = document.getElementById('multiply');
let checkDivision = document.getElementById('division');
let startButton = document.getElementById('start');
let containerTask = document.getElementById('containerResult');
let checkButton = document.getElementById('check');

let task = parseInt(prompt('How many task: '));

function checkInput() {

    let arr = [];

    if (checkPlus.checked) {
        arr.push('+');
    }

    if (checkMinus.checked){
        arr.push('-')
    }

    if (checkMultipliy.checked){
        arr.push('*')
    }

    if (checkDivision.checked){
        arr.push('/')
    }

    return arr;
}

let resultArray = [];

function randomValue() {
    let operator = checkInput();
    let min  = parseInt(prompt('Give me min value: '));
    let max =  parseInt(prompt('Give me max value: '));
    checkButton.disabled = false;
    for (let i = 0; i < task; i++){
        let index = i % operator.length;
        let randomValue1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomValue2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let result = eval('randomValue1' + operator[index].toString() + 'randomValue2');
        resultArray.push(result);
        console.log(randomValue1 + operator[index] + randomValue2 + " = " + result);
        let endOperator = operator[index];
        let divNew = document.createElement('div');
        let checkInput = document.createElement('input');
        checkInput.setAttribute('type','number');
        checkInput.className = 'checkInput';
        checkInput.setAttribute('value', '0');
        divNew.className = 'taskContent';
        divNew.innerHTML = randomValue1 + " " + endOperator + " " + randomValue2 + " " + '=' + " "  ;
        containerTask.appendChild(divNew);
        divNew.appendChild(checkInput);
    }

}




function checkAnswer(){
    let newarr = [];
    let divNew  = document.getElementsByClassName('taskContent');
        for (let i = 0; i < task; i++){
            let element = document.getElementsByClassName('checkInput')[i].value;
            newarr.push(element);
            if (newarr[i] === resultArray[i].toString()){
                let resultTrue = document.createElement('span');
                resultTrue.innerHTML = '   true';
                divNew[i].appendChild(resultTrue);
            }
            else {
                let resultFalse = document.createElement('span');
                resultFalse.innerHTML = '   false';
                divNew[i].appendChild(resultFalse)
            }
        }
}






checkButton.addEventListener("click", checkAnswer);
startButton.addEventListener('click', randomValue);














