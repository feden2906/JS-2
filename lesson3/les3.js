// // - створити функцію яка обчислює та повертає площу прямокутника висотою
// let a = 10;
// let h = 25;
// function triangle(a, h) {
//     let res = (2 / a * h);
//     return res;
//     }
// let res = triangle(a, h);
// console.log(res);

// // - створити функцію яка обчислює та повертає площу кола
// let r = 20;
// function roud(r){
//     let res= Math.PI * (r**2);
//     return res;
// }
// let res = roud(r);
// console.log(res);

// - створити функцію яка обчислює та повертає площу циліндру
// let r = 15;
// let h = 15;
// let a = 2;
// function cylinder(r, h){
//     let res =(Math.PI * r * h) * a; // як описати формулу res= 2ПRH ?
//     return res;
// }
// let res = cylinder(r, h);
// console.log(res);

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax (){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (i = 0, i = arguments.length, i++){
//         if (arguments[i] > max){
//             max = arguments[i];
//         }
//         if (arguments[i] < min){
//             miv = arguments[i];
//         }
//     }
//     console.log(min);
// }
// console.log(minMax())

// // - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function native(text){
//     document.write(`<div>
//     <p>${text}</p>
//     </div>`)
// }
// native('Рішення цього завдання зайняло надто багато часу, порівняно з простотою його виконання.')//звісно, якщо це правильно

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function native(text){
//     document.write(`<div>
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>
// </div>`)
// }
// native('дуже цікаво')

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function native(text, num) {
//         console.log(mass);
// for (let i=0; i < num; i++){
//     document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`)
// }
// native('що буде перше? зїсти себе чи дійти до кінця курсу', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = []
// for (const mas of mass) {
//     function list(){
//         document.write(`<ul>
// <li>${}</li>
// </ul>`)
//     }
// }

