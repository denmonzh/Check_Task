let changeClass  = document.getElementById('buttonAdd');
let removeClass  = document.getElementById('buttonRemove');
let checkClass  = document.getElementById('checkClass');
let addRemoveClass  = document.getElementById('addRemoveClass');
let countClass  = document.getElementById('countClass');
let alertClass  = document.getElementById('allClass');
let changeStyle  = document.getElementById('changeStyle');
let tagName  = document.getElementById('pushTagName');
let addLiTag  = document.getElementById('addLiTag');
let addArrayItems = document.getElementById('addArrItems');

function addClass() {
    let element  = document.getElementById('testID');
    element.classList.add('lala');
}

function removeCls() {
    let element  = document.getElementById('testID');
    element.classList.remove('lala');
}

function checkCls(){
    let element  = document.getElementById('testID');
    console.log(element.classList.contains('lala'));
}


function addRemove(){
    let element  = document.getElementById('testID');
    (element.classList.contains('lala') === true) ?  element.classList.remove('lala') : element.classList.add('lala');
}



function cntClass(){
    let element  = document.getElementById('testID');
    console.log(element.classList.length);
}

function alClass(){
    let element  = document.getElementById('testID');
    let c = element.className;
    let arr = c.split(" ");
    for (let i = 0; i < arr.length; i++){
        alert('Class name: ' + arr[i]);
    }
}

function chgStyle(){
    let element = document.getElementById('testID');
    element.style.cssText  = 'background-color: red;  border: solid black';
}

function pushTagName(){
   for (let i = 0; i < document.body.children[9].children.length; i++){
         let span = document.createElement('span');
         let text = " " + document.body.children[9].children[i].tagName.toLowerCase();
         span.append(text);
         document.body.children[9].children[i].appendChild(span);
     }

}

function addLi(){
    let Li  = document.createElement('li');
    Li.innerHTML = 'Точка';
    list.appendChild(Li);
}

function addArrItems(){
    let arr = [];
    let countArray = prompt('How many items will be in arr?');
    for (let i = 0; i < countArray; i++){
        let context = prompt('Give me items:');
        let liTag = document.createElement('li');
        arr.push(context);
        liTag.innerHTML = arr[i];
        listArray.appendChild(liTag);
    }

}




var a = {};
fetch("https://pokeapi.co/api/v2", {method: 'GET'})
    .then(function (data) {
        return data.json();
    })
    .then(function(data) {
        debugger;
    })
    .catch(function(err) {
        debugger;
    });

console.log('lalla');














changeClass.addEventListener("click", addClass);
removeClass.addEventListener("click", removeCls);
checkClass.addEventListener("click", checkCls);
addRemoveClass.addEventListener("click", addRemove);
countClass.addEventListener("click", cntClass);
alertClass.addEventListener('click', alClass);
changeStyle.addEventListener("click", chgStyle);
tagName.addEventListener("click", pushTagName);
addLiTag.addEventListener("click", addLi);
addArrayItems.addEventListener("click", addArrItems);

