// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = inputRangeRef.value + "px";
function fontSizeControl(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}

inputRangeRef.addEventListener("input", fontSizeControl);
