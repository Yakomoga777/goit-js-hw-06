const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const image = {
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
};
/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. 
HTML містить список ul.gallery.

Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

//* 1.Знаходимо батьківський елемент

const ulGallery = document.querySelector('ul.gallery');
console.log(ulGallery);

//* 2. Створюємо теги <img> та <li>, та вкладаємо їх в список.
const liEl = document.createElement('li');
const imgEl = document.createElement('img');

// console.log(liEl, imgEl);

//* 3. Вставляємо рядки в тег img
imgEl.setAttribute('src', image.url);
imgEl.setAttribute('alt', image.alt);
console.log(imgEl);

//* 4. Вкладаємо теги <img> в <li>

liEl.insertAdjacentHTML('afterbegin', '');
console.log(liEl);
