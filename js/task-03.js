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

/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. 
HTML містить список ul.gallery.

Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

const list = document.querySelector('.gallery');
console.log(list);

const stringEl = images
  .map(
    image =>
      `<li><img class="photo" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join('');
// console.log(stringEl);
list.insertAdjacentHTML('afterbegin', stringEl);

// //* 1.Знаходимо батьківський елемент

// const ulGallery = document.querySelector('ul.gallery');
// console.log(ulGallery);

// //* 2. Створюємо тег <li>
// const liEl = document.createElement('li');

// console.log(liEl, imgEl);

// //* 3. Створюємо тег img
// const imgEl = document.createElement('img');
// imgEl.setAttribute('src', image.url);
// imgEl.setAttribute('alt', image.alt);
// console.log(imgEl);

// //* 4. Додаємо елемент до масиву
// let array = [];
// array.push(imgEl.src, imgEl.alt);
// // array.push();
// console.log(array);
// console.log();
// //перетворюємо масив в рядок
// const string = `<img src= "${array[0]}" alt= "${array[1]}">`;
// console.log(string);

// //* 4. Вкладаємо теги <img> в <li>

// liEl.insertAdjacentHTML('afterbegin', string);
// console.log(liEl);

// ulGallery.append(liEl);

//* Автоматизуємо у функції, перебираючи images масив об"єктів

// function makeGalleryList(array) {
//   const ulGallery = document.querySelector('ul.gallery'); // 1.Знаходимо батьківський елемент

//   images.forEach(image => {
//     const liEl = document.createElement('li'); //2. Створюємо тег <li>
//     liEl.classList.add('gallery__items');

//     const imgEl = document.createElement('img');

//     imgEl.setAttribute('src', image.url);
//     imgEl.setAttribute('alt', image.alt);

//     let array = [];
//     array.push(imgEl.src, imgEl.alt);

//     const string = `<img src= "${array[0]}" alt= "${array[1]}">`;

//     liEl.insertAdjacentHTML('afterbegin', string);

//     return ulGallery.append(liEl);
//   });
// }

// console.log(makeGalleryList(images));

// Не можу через insertAdjacentHTML здійснити додавання. Допоможіть розібратися.
// const gallery = document.querySelector('.gallery');
// for (const element of images) {
//   const liEl = document.createElement('li');
//   liEl.classList.add('list');
//   console.log(liEl);

//   const imageEl = document.createElement('img');
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;
//   imageEl.width = 320;
//   console.log(imageEl);
//   console.log(element.url);

//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li><img src=" ${element.url}" </li>`
//   );
// }

// const gallery = document.querySelector('.gallery');
// const elements = images.map(option => {
//   const liEl = document.createElement('li');
//   liEl.classList.add('list');

//   const imageEl = document.createElement('img');
//   imageEl.src = option.url;
//   imageEl.alt = option.alt;
//   imageEl.width = 320;

//   liEl.append(imageEl);
//   console.log(liEl);
//   gallery.append(liEl);
//   // return imageEl;
// });
// gallery.append(...elements);
