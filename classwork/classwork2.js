// --створити масив з:

// - з 5 числових значень
// let mas = [3, 5, 6, 7, 4];
// console.log(mas);

// - з 5 стічкових значень
// let mas1 = ['3', '6', '8', '9', '11'];
// console.log(mas1);

// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let mas = ['3', 6, true, 'false', 9];
// console.log(mas);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = [];
// console.log(empty [0]);

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of numbers) {
//     document.write(`<div>${number}</div>`)
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '11'];
// for (const number of numbers) {
//     document.write(`<div>${number} gihm </div>`); // не розумію як з індексом всередині?
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     i++
//     document.write(`<ul>
// <li><h1>Привітулі</h1></li>
// </ul>`)
// }
// console.log(i);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [2, 3, 5, 6, 77, 88, 66, 565, 655, 567]
// for (const number of numbers) {
//     console.log(number)
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strngs = ['ручка', 'блокнот', 'запис', 'школа', 'шпори', 'вчитель', 'куратор', 'ментор', 'завдання', 'оцінка']
// for (const strng of strngs) {
//     console.log(strngs);
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mass = [2, 4, 55, 65, 'жук', 'heart','down', '33', 88, 99]
// for (const mas of mass) {
//     console.log(mas);
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let elements = [2, 3, 5, 6, 'ручка', 'блокнот', 'запис', 'школа', true, false]
// for (const element of elements) {
//     if (typeof element === 'boolean'){
//     }
//            }
// console.log(typeof 'boolean');

// //Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let elements = [2, 3, 5, 6, 'ручка', 'блокнот', 'запис', 'школа', true, false]
// for (const element of elements) {
//     if (typeof [0] === 'number');
// }
// console.log()

// // Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let elements = [2, 3, 5, 6, 'ручка', 'блокнот', 'запис', 'школа', true, false]
// for (const element of elements) {
//     if (typeof [0] === 'string');
// }
// console.log()

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mass = []


// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <10; i++){
// console.log(i)
// document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <100; i++){
//         console.log(i)
//         document.write(i)
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <100; i += 2){
//         console.log(i)
//         document.write(i)
// }                                                      //вивело мені в консоль лише парні чи це другий крок?

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//         document.write(i)
//     }
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <100; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//         document.write(i)
//     }
// }