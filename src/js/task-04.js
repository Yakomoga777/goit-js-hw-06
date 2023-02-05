/*
 *1. Створи змінну counterValue, в якій буде зберігатися
 *   поточне значення лічильника та ініціалізуй її значенням 0.
 *2. Додай слухачів кліків до кнопок, всередині яких збільшуй
 *   або зменшуй значення лічильника.
 *3. Оновлюй інтерфейс новим значенням змінної counterValue.
 */

// Знаходжу кнопки
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
console.log(btnDecrementEl);
const btnIncrementEl = document.querySelector('[data-action="increment"]');
console.log(btnIncrementEl);

//* 1 Створюю змінну counterValue
const counterValue = document.querySelector('#value');
counterValue.textContent = '50';

console.log(counterValue);

//* 2.Додаю слухачів на кнопки.
btnDecrementEl.addEventListener('click', onDecrementBtnClick);
btnIncrementEl.addEventListener('click', onIncrementBtnClick);

//Створюю колбеки
function onDecrementBtnClick() {
  //   event.preventDefault();
  console.log('- клік');

  counterValue.textContent = Number(counterValue.textContent) - 1;
}
// console.log(onDecrementBtnClick());
function onIncrementBtnClick() {
  console.log('+ клік');

  counterValue.textContent = Number(counterValue.textContent) + 1;
}
