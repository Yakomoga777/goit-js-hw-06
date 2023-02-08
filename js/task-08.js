/*
 *
 * Обробка відправлення форми form.login-form повинна відбуватися
 * відповідно до події submit.
 * Під час відправлення форми сторінка не повинна перезавантажуватися.
 *
 * Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
 * що всі поля повинні бути заповнені.
 *
 * Якщо користувач заповнив усі поля і відправив форму, збери значення полів
 * в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
 * Для доступу до елементів форми використовуй властивість elements.
 *
 * Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
 */

const inputEmailEl = document.querySelector('[type="email"]');
const inputPasswordEl = document.querySelector('[type="password"]');
const formEl = document.querySelector('.login-form');

const btnEl = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', formSubmit);

function formSubmit(formEl) {
  formEl.preventDefault();

  if (inputEmailEl.value === '' || inputPasswordEl.value === '') {
    alert('всі поля повинні бути заповнені');
  } else {
    const elements = {
      email: inputEmailEl.value,
      password: inputPasswordEl.value,
    };
    formEl.currentTarget.reset();
    console.log(elements);
  }
}
