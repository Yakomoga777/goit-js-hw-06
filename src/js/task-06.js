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
console.log(inputEl);
inputEl.addEventListener('blur', callback);
function callback(event) {
  if (Number(event.currentTarget.value.length) !== 6) {
    // console.log(Number(event.currentTarget.value.length));
    console.log(typeof event.currentTarget.value.length);

    inputEl.classList.add('red-border');
    inputEl.classList.remove('green-border');
  } else inputEl.classList.add('green-border');
  inputEl.classList.remove('red-border');

  //   console.log(event.target.value.length);
  //   console.log('Розфокус');
}
console.log(callback());
