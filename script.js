"use strict";

//Получение переменных 
let square = document.getElementById('square');
let text = document.getElementById('text');
let button = document.getElementById('btn');
let eBtn = document.getElementById('e_btn');
let circle = document.getElementById('circle');
let range = document.getElementById('range');
let span = document.getElementById('range-span');

//Функция изменения фона квадрата
let background = function(){
  square.style.background= text.value;
  text.value = "";
};

//Клик изменения фона квадрата
button.addEventListener('click', background);

//Сделал кнопку невидимой
eBtn.style.display = "none";

//Функция изменения ширины и высоты круга
let size = function(){
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
  span.textContent = range.value;
};

//Изменение размеров круга через range
range.addEventListener('input', size);