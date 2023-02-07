/*
 *1 Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
 *  перевіряє його вміст щодо правильної кількості введених символів.

 * - Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті
 *   data-length.
 
 * - Якщо введена правильна кількість символів, то border інпуту стає зеленим,
 *   якщо неправильна кількість - червоним.
 */
// const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);
// inputEl.addEventListener('blur', callback);
// function callback(event) {
//   if (event.currentTarget.value.length !== 6) {
//     inputEl.className('.red-border');
//   } else inputEl.className('.green-border');

//   //   console.log(event.target.value.length);
//   //   console.log('Розфокус');
// }
// console.log(callback());

const inputEl = document.querySelector('#validation-input');
console.log(typeof +inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (
    Number(event.target.value.length) !== +inputEl.getAttribute('data-length')
  ) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
console.log(callback());
