'use strict'

function query(selector) {
    return document.querySelector(selector)
}
let styleForm = document.forms.styleForm;
let inForm = document.forms.inForm;
let buttonForm = document.forms.buttonForm;
let chooseForm = document.forms.chooseForm;
let tableForm = document.forms.tableForm;
let listForm = document.forms.listForm;
//   Push

inForm.saveButton.addEventListener('click', function () {
    document.querySelector('.Out').innerHTML = inForm.inArea.value
    inForm.style.visibility = 'hidden';
})


// MAIN BUTTONS

buttonForm.editButton.addEventListener('click', () => {
    inForm.style.visibility = 'visible';
    document.querySelector('.styleBlock').style.visibility = 'hidden';
    query('.textColorMenu').style.visibility = 'hidden';
    query('.backgroundColorMenu').style.visibility = 'hidden';
})
buttonForm.styleButton.addEventListener('click', () => {
    document.querySelector('.styleBlock').style.visibility = 'visible';
    inForm.style.visibility = 'hidden';
})

// STYLE FORM

// COLOR 

styleForm.textColor.addEventListener('click', () => {
    query('.textColorMenu').style.visibility = 'visible';
    query('.backgroundColorMenu').style.visibility = 'hidden';
})
styleForm.backgroundColor.addEventListener('click', () => {
    query('.backgroundColorMenu').style.visibility = 'visible';
    query('.textColorMenu').style.visibility = 'hidden';
})
query('.backgroundColorMenu').addEventListener('click', function (event) {
    query('.Out').style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    query('.backgroundColorMenu').style.visibility = 'hidden';

})
query('.textColorMenu').addEventListener('click', function (event) {
    query('.Out').style.color = getComputedStyle(event.target).backgroundColor;
    query('.textColorMenu').style.visibility = 'hidden';
})

// FONT SIZE

query('.radioBlock').addEventListener('click', function (event) {
    query('.Out').style.fontSize = event.target.value;
})

// FONT FAMILY

query('.styleOption').addEventListener('click', function (event) {
    query('.Out').style.fontFamily = event.target.value;
})

// Text type

query('.styleTextCheckbox').addEventListener('click', function (event) {
    if (event.target.checked == true) {
        query('.Out').style.fontWeight = event.target.value;
        query('.Out').style.fontStyle = event.target.value;
    } else {
        query('.Out').style.fontWeight = '';
        query('.Out').style.fontStyle = '';
    }
})

inForm.addButton.addEventListener('click', () => {
    query('.container1').style.visibility = 'hidden';
    inForm.style.visibility = 'hidden';
    query('.container2').style.visibility = 'visible';
    query('.Out').style.visibility = 'collapse'
})


// Create block

chooseForm.addEventListener('click', function (event) {
    if (event.target.id === 'table') {
        query('.tableBlock').style.visibility = 'visible';
        query('.listBlock').style.visibility = 'hidden';
    } else if (event.target.id === 'list') {
        query('.tableBlock').style.visibility = 'hidden';
        query('.listBlock').style.visibility = 'visible';
    }
})


// Table 


tableForm.tableCreateButton.addEventListener('click', () => {
    let trCount = tableForm.countTr.value;
    let tdCount = tableForm.countTd.value;
    let td = '';
    let tr = '';
    for (let i = 1; i <= tdCount; i++) {
        td += `<td style = "width : ${tableForm.widthTd.value +'px'};height: ${tableForm.heightTd.value +'px'};border :${tableForm.borderWidth.value + 'px'} ${tableForm.tableTypeBorder.value} ${tableForm.tableColorBorder.value}">TD</td>`; 
    }
    for(let j = 1;j <= trCount;j++){
        tr += `<tr>${td}</tr>` 
    }
    inForm.inArea.value +=`<table>${tr}</table>`; 
    query('.container2').style.visibility = 'hidden';
    query('.container1').style.visibility ='visible';
    query('.tableBlock').style.visibility = 'hidden';
    inForm.style.visibility = 'visible';
    query('.Out').style.visibility = 'visible'
})


// List

listForm.createList.addEventListener('click',()=>{
    let Countli = listForm.CounLi.value;
    let style = listForm.ListType.value;
    let ul = '';
    for ( let i = 1; i <= Countli;i++){
        ul += `<li style = "list-style-type :${style}">Items${i}</li>`
    } 
    inForm.inArea.value += `<ul>${ul}</ul>`;
    query('.container2').style.visibility = 'hidden';
    query('.listBlock').style.visibility = 'hidden';
    query('.container1').style.visibility = 'visible';
    inForm.style.visibility = 'visible';
    query('.Out').style.visibility = 'visible'
})

