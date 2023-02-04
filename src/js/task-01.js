// Напиши скрипт, який:

/*
 * - Порахує і виведе в консоль кількість категорій в ul#categories,
 * тобто елементів li.item.
 * - Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
 * текст заголовку елемента (тегу <h2>)
 * і кількість елементів в категорії (усіх <li>, вкладених в нього).
 * - В результаті, в консолі будуть виведені наступні повідомлення.
 */

//* Пункт 1
const makeCountsCategories = () => {
  const categoriesEl = document.querySelector('ul#categories');
  console.log(categoriesEl);

  const liItemsEl = categoriesEl.querySelectorAll('li.item');
  console.log(liItemsEl);

  return `Number of categories : ${liItemsEl.length}`;
};
console.log(makeCountsCategories());

//* Пункт 2

const ItemsEl = document.querySelectorAll('.item');
console.log(ItemsEl);

ItemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
