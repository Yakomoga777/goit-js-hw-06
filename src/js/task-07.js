/*
 * Напиши скрипт, який реагує на зміну значення input#font-size-control
 * (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 * В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
 */

const inputControlEl = document.querySelector('#font-size-control');
console.log(inputControlEl);
const spanTextEl = document.querySelector('#text');
console.log(spanTextEl);

inputControlEl.addEventListener('input', callback);
function callback(event) {
  let fontSize = '';
  fontSize = event.currentTarget.value;

  spanTextEl.setAttribute('style', `font-size: ${fontSize}px`);
}
