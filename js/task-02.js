const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*
Напиши скрипт, який для кожного елемента масиву ingredients:

1, Створить окремий елемент <li>. 
Обов'язково використовуй метод document.createElement().
2, Додасть назву інгредієнта як його текстовий вміст.
3, Додасть елементу клас item.
4, Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

*/
//* 1.Створюю елемент <li>

// const liEl_1 = document.createElement('li');
// const liEl_2 = document.createElement('li');
// const liEl_3 = document.createElement('li');
// const liEl_4 = document.createElement('li');
// const liEl_5 = document.createElement('li');

// //* 2. Додаємо контент
// liEl_1.textContent = 'Potatoes';
// liEl_2.textContent = 'Mushrooms';
// liEl_3.textContent = 'Garlic';
// liEl_4.textContent = 'Tomatos';
// liEl_5.textContent = 'Herbs';

// //* 3. Додаємо класи
// liEl_1.classList.add('item');
// liEl_2.classList.add('item');
// liEl_3.classList.add('item');
// liEl_4.classList.add('item');
// liEl_5.classList.add('item');

// console.log(liEl_1);

//* 4. Вставити усі li у список ul#ingredients

//Знаходио батьківський елемент
// const ulCategories = document.querySelector('ul#ingredients');
// console.log(ulCategories);

//вставляємо в нього лішки
// ulCategories.append(liEl_1, liEl_2, liEl_3, liEl_4, liEl_5);

// function creatsList(ingredients) {
//   const array = ingredients.map(element => {
//     let el = document.createElement('li');
//     el.textContent = element;
//     el.classList.add('item');
//     console.log(el);

//     // const ulCategories = document.querySelector('ul#ingredients');
//     // ulCategories.append(el);
//   });
//   const ulCategories = document.querySelector('ul#ingredients');
//   ulCategories.append(...array);
//   console.log(array);
// }
// console.log(creatsList(ingredients));

function creatsList(ingredients) {
  const array = [];
  ingredients.forEach(element => {
    let el = document.createElement('li');
    el.textContent = element;
    el.classList.add('item');

    array.push(el);

    const ulCategories = document.querySelector('ul#ingredients');
    ulCategories.append(...array);
  });
  console.log(array);
}
console.log(creatsList(ingredients));
