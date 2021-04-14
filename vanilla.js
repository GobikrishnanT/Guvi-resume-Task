let spanTag = document.querySelectorAll('span');
let slider = document.querySelector('#slider_Id');
let inputTag = document.querySelectorAll('input');

for(let i = 0 ; i < inputTag.length ; i++) {
    inputTag[i].style.background=`linear-gradient(90deg ,orange ${inputTag[i].value}%, rgb(245, 236, 221) ${100 - Number(inputTag[i].value)}%)`;
}