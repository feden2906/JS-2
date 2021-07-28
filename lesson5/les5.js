// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// // -- отримує текст з параграфа з id "content"
// let elementById = document.getElementById('content')
// console.log(elementById);

// // -- отримує текст з блоку з id "rules"
// let elementById = document.getElementById('rules')
// console.log(elementById);

// // -- замініть текст параграфа з id 'content' на будь-який інший
// let elementById = document.getElementById('content')
// elementById.innerHTML = '<div>Вітаю в Нарнії</div>'

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let elementById = document.getElementById('rules')
// elementById.innerHTML = '<div>Тайлер потужний тіп</div>'

// // -- змініть кожному елементу колір фону на червоний
// let elementById = document.getElementById('content');
// elementById.style.backgroundColor = 'silver';
//
// let elementByIdRules = document.getElementById('rules');
// elementByIdRules.style.backgroundColor = 'lightblue';
//
// let elementsByTagNameLi = document.getElementsByTagName("li");
// console.log(elementsByTagNameLi);
// for (const li of elementsByTagNameLi) {
//     console.log(li);
//     li.style.backgroundColor = 'red';
// }

// -- змініть кожному елементу колір тексту на синій
let elementByIdText = document.getElementById('content');
// elementByIdText.innerHTML = '<h1>Добро пожаловать в БК</h1>'
elementByIdText.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
