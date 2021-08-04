// // - створити функцію яка приймає масив та виводить його
// const arr = ['123', 123, 45, 'dddd']
// function native(aa){
//     console.log(aa)
// }
// native(arr);

// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minMax() {
//     let min = arguments[0];
//     for (let num of arguments) {
//         if (num < min) min = num;
//     }
//     return min;
// }
//
// console.log(minMax(10, 18, -33, 55))

// // // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function minMax (){
//     let max = arguments[0];
//     for (let num of arguments){
//         if (num > max) max = num;
//     }
//     return max;
// }
// console.log(minMax(10, 18, -33, 55))

// // - створити функцію яка повертає найбільше число з масиву
// let mass = [3, 4, 5, 7, -5, 56]
//
// const maxNum = (arr) => {
//     let max = arr[0];
//     for (let num of arr) {
//         if (num > max) max = num;
//     }
//     return max;
// }
//
// console.log(maxNum(mass));

// // // - створити функцію яка повертає найменьше число з масиву
// let mass = [3, 4, 5, 7, -5, 56]
//
// const  minNum = (arr) => {
//     let min = arr[0];
//     for (let num of arr) {
//         if (num < min) min = num;
//     }
//     return min;
// }
// console.log(minNum(mass))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mass = [3, 4, 5, 7, -5, 56]
//
// const qqqqq = (arr) => {
//     let result = 0;
//     for (let num of arr) {
//         result = result + num
//     }
//     return result;
// }
//
// console.log(qqqqq(mass));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mass = [3, 4, 5, 7, -5, 56]
//
// const qqqqq = (arr) => {
//     let result = 0;
//     for (let num of arr) {
//         result = result + num
//     }
//     return result / arr.length;
// }
//
// console.log(qqqqq(mass));

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// //     Для виведення використати попередню функцію.
// function randomMass() {
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// let result = randomMass();
// console.log(result);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// const ddd = (array) => {
//     const newArr = [];
//
//     for (const obj of array) {
//         newArr.push(...Object.keys(obj))
//     }
//
//     return newArr;
// }
//
// const result = ddd([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(result);

// //     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// const ddd = (array) => {
//     const newArr = [];
//
//     for (const obj of array) {
//         newArr.push(...Object.values(obj))
//     }
//
//     return newArr;
// }
//
// const result = ddd([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(result);