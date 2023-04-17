// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    outputName.textContent = currentTarget.value.trim();
  } else {
    outputName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", getInputValue);