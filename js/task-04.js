/*
 *1. Створи змінну counterValue, в якій буде зберігатися
 *   поточне значення лічильника та ініціалізуй її значенням 0.
 *2. Додай слухачів кліків до кнопок, всередині яких збільшуй
 *   або зменшуй значення лічильника.
 *3. Оновлюй інтерфейс новим значенням змінної counterValue.
 */

// Знаходжу кнопки
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

//* 1 Створюю змінну counterValue
const counterValue = document.querySelector('#value');
counterValue.textContent = '0';

//* 2.Додаю слухачів на кнопки.
btnDecrementEl.addEventListener('click', onDecrementBtnClick);
btnIncrementEl.addEventListener('click', onIncrementBtnClick);

//Створюю колбеки
function onDecrementBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onIncrementBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
