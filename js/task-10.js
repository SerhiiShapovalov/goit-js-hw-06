// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция. При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько указано
// в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const inputNumberElement = document.querySelector('[type="number"]');
const createBtnElement = document.querySelector("button[data-create]");
const destroyBtnElement = document.querySelector("button[data-destroy]");
const divBoxesElement = document.getElementById("boxes");

inputNumberElement.addEventListener("input", toogleValue);
createBtnElement.addEventListener("click", () => {
  createBoxes(Number(inputNumberElement.value));
});
destroyBtnElement.addEventListener("click", destroyBoxesMarkup);

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement("div");
    divElement.classList = "item";
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
  }
  return divBoxesElement.append(...divArray);
}

function destroyBoxesMarkup() {
  inputNumberElement.value = "";
  return (divBoxesElement.innerHTML = "");
}
