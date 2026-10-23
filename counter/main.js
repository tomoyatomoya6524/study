'use strict';
let num = 0;
const counterBox = document.getElementById('counterBox');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const deleteButton = document.getElementById('deleteButton');

plusButton.addEventListener('click',function(e){
    num++;
    counterBox.textContent = num;
},false);

minusButton.addEventListener('click',function(e){
    num--;
    counterBox.textContent = num;
});

deleteButton.addEventListener('click',function(e){
    num = 0;
    counterBox.textContent = num;
});
