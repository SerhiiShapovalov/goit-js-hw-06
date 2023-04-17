/*Счетчик состоит из спана и кнопок, которые, при клике, должны 
увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее
значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или
уменьшай значение счетчика.
Обновляй интерфейс новым значением переменной counterValue.*/

let counterValue = 0;
const valueRef = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);