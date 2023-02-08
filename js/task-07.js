/*
 * Напиши скрипт, який реагує на зміну значення input#font-size-control
 * (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 * В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
 */

const inputControlEl = document.querySelector('#font-size-control');
console.log(inputControlEl);
const spanTextEl = document.querySelector('#text');
console.log(inputControlEl.getAttribute('min'));

inputControlEl.addEventListener('input', onRangeInput);
// inputControlEl.target.value = 16;

function onRangeInput(event) {
  // let fontSize = '';
  let fontSize = event.target.value;
  let a = spanTextEl.style.fontSize;
  // console.log(fontSize);
  if (event.target.value === null) {
    spanTextEl.style.fontSize = '55px';
  }
  // spanTextEl.setAttribute('style', `font-size: ${fontSize}px`);
  spanTextEl.style.fontSize = `${fontSize}px`;
  console.log(event.value);
}
