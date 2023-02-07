/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
по кліку на button.change-color і виводить значення кольору в span.color.
*/

const btnEl = document.querySelector('.change-color');
btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  function getRandomHexColor() {
    console.log('клік');

    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const bodyEl = document.querySelector('body');

  bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`);
  console.log(bodyEl);
  console.log(getRandomHexColor());
}
