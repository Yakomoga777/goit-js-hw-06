//* 1. Знаходимо інпут і вішаємо слухача
const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputKeypress);

const spanEl = document.querySelector('#name-output');

//* 2. Створюємо callback

function onInputKeypress(event) {
  if (event.currentTarget.value === ' ') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
