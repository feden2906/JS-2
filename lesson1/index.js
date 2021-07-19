// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// // За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = '"привіт"';
// console.log(str);
//
// let num = '123';
// console.log(num);
//
// let flag = 'true';
// console.log(flag);
//
// let txt = '"true"';
// console.log(txt);
//
// document.write(`<h1>${str}</h1>`);
// document.write(`<h2>${num}</h2>`);
// document.write(`<h3>${flag}</h3>`);
// document.write(`<h4>${txt}</h4>`);
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних операцій отримайте числа:
//         34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// 34
//
// let a1 = '2';
// let a2 = '4';
// let a3 = '5';
// let a4 = '7';
// let a5 = '14';
// let a6 = '40';
//
// function calculator1(a2, a3, a5) {
//     let result1 = (a2 * a3) + a5;
//     return result1;
// }
// let res1 = calculator1(a2, a3, a5);
// console.log(res1);
//
//
// function calculator(a1, a2, a3, a4) {
//     let result = (a2 * a3) + (a1 * a4);
//     return result;
// }
// let ress = calculator(a1, a2, a3, a4);
// console.log(ress);
//
//
// function calculator3(a1, a3, a6) {
//     let result3 = (a1 * a1) + (a6 / a1) + (a1 * a3);
//     return result3;
// }
// let ress3 = calculator3(a1, a3, a6);
// console.log(ress3);
//
// // 12
// let b1 ='2';
// let b2 ='3';
// let b3 ='4';
// let b4 ='12';
// let b5 ='24';
// let b6 ='48';
//
// function calc(b1, b5){
//     let res = (b5 / b1);
//     return res;
// }
// let res = calc(b1, b5);
// console.log(res);
//
// function calc2(b2, b4, b6){
//     let res2 = (b6 / b4) * b2;
//     return res2;
// }
// let res2 = calc2(b2, b4, b6);
// console.log(res2)
//
// function calc3(b1, b3){
//     let res3 = (b1 * b1) * b1 + b3;
//     return res3;
// }
// let res3 = calc3(b1, b3);
// console.log(res3);
//
// //
// //
// // 66
// let c1 = '2';
// let c2 = '3';
// let c3 = '6';
// let c4 = '11';
//
// function calc4(c3, c4){
//     let res4 = (c3 * c4);
//     return res4;
// }
// let res4 = calc4(c3, c4);
// console.log(res4);
//
// function calc5(c1, c4){
//     let res5 = (c1 * c4) + (c1 * c4) + (c1 * c4);
//     return res5;
// }
// let res5 = calc5(c1, c4);
// console.log(res5);
//
// function calculato(c1, c2, c4){
//     let resalt = (c1 * c4) * c2;
//     return resalt;
// }
// let resalt = calculato(c1, c2, c4);
// console.log(resalt);
//
// // 90
// //
// let d1 = '2';
// let d2 = '10';
// let d3 = '15';
// let d4 = '30';
// let d5 = '270';
//
// function calcul(d1, d3, d4){
//     let resul = (d4 * d1) + (d3 * d1);
//     return resul;
// }
// let resul = calcul(d1, d3, d4);
// console.log(resul);
//
// function calcul2(d1, d3){
//     let resul2 = (d1 * d3) + (d1 * d3) + (d1 * d3);
//     return resul2;
// }
// let resul2 = calcul2(d1, d3);
// console.log(resul2);
//
// function calcul3(d2, d4, d5){
//     let resul3 = (d5 / d4) * d2;
//     return resul3;
// }
// let resul3 = calcul3(d2, d4, d5);
// console.log(resul3);
//
// // 87
//
// let i1 = '2';
// let i2 = '3';
// let i3 = '4';
// let i4 = '5';
// let i5 = '7';
// let i6 = '9';
// let i7 = '10';
// let i8 = '20';
// let i9 = '400';
//
// function calculat(i3, i5, i8){
//     let resull = (i3 * i8) + i5;
//     return resull;
// }
// let resull = calculat(i3, i5, i8);
// console.log(resull);
//
// function calculat1(i1, i3, i5, i7){
//     let resull1 = (i7 * i7) - (i1 + i3 + i5);
//     return resull1;
// }
// let resull1 = calculat1(i1, i3, i5, i7);
// console.log(resull1);
//
// function calculat2(i1, i2, i4, i6, i7, i9){
//     let resull2 = (i4 * i1) + (i9 / i7) + (i2 * i6);
//     return resull2;
// }
// let resull2 = calculat2(i1, i2, i4, i6, i7, i9);
// console.log(resull2);

// // 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// // 5 % 3,
// let a1 = 5;
// let a2 = 3;
// function cal(a1, a2){
//     let a6 = (a1 % a2);
//     return a6;
// }
// let a6 = cal(a1, a2); //чи потрібна ця частина, якщо (якщо я не помиляюсь) присвоєння відбулось в рядку 191 ?
// console.log(a6)
//
// // 3 % 5,
// let b1 = 3;
// let b2 = 5;
// function cal2(b1, b2){
//     let a7 = (b1 % b2);
//     return a7;
// }
// let a7 = cal2(b1, b2);
// console.log(a7);
//
// // 5 + '3',
// let c1 = 5;
// let c2 = '3';
// function cal3(c1, c2){
//     let a8 =(c1 + c2);
//     return a8;
// }
// let a8 = cal3(c1, c2);
// console.log(a8);
//
// // '5' - 3,
// let d1 = '5';
// let d2 = 3;
// function cal4(d1, d2){
//     let a9 =(d1 - d2);
//     return a9;
// }
// let a9 = cal4(d1, d2);
// console.log(a9);
//
// // 75 + 'кг'a10
// let i1 = 75;
// let i2 = 'кг';
// function cal5(i1, i2){
//     let a10 =(i1 + i2);
//     return a10;
// }
// let a10 = cal5(i1, i2);
// console.log(a10);

// // // 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // // Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
//  function area(h, w){
//      let s =(h * w);
//      return s;
//  }
//  let s = area(height, width);
//  console.log(s);

// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// // результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let a = 2;
//
// function vol(h, dC, p){
//     let r = (dC / a);
//     console.log(r);
//     let v = (Math.PI * (r**2) * h);
//     return v;
// }
// let v = vol(heightC, dC);
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
//
// function j(n, m){
//     let k = (n ** 2) * (m * 2);
//     return k;
// }
// let k = j(n, m);
// console.log(k);

// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert(`Anastasiia Andriivna \n28 \nsports`);

// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Хто';
// console.log(str1);
// let str2 = 'ти';
// console.log(str2);
// let str3 = 'такий?';
// console.log(str3);
//
// let concatenation = (`${str1} ${str2} ${str3}`);
//
// document.write(`${str1} ${str2} ${str3}`);

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");  //205 при додаванні зчитується як стрінгові значення
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); // 100
// document.write(str / 2 + "<br/>"); //10

// // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let a1 = prompt('скільки у вас пальців на правій руці?');
// let a2 = prompt('скільки у вас пальців на правій руці');
// function calc(a1, a2){
//     let res = (a1 + a2);
//     return res;
// }
// let res = calc(a1, a2);
// alert(res);

// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let a1 = prompt('ваше імя');
// let a2 = prompt('ваше прізвище');
// let a3 = prompt('ваш вік');
// alert(`Доброго вечора ${a1} ${a2}, мої вітання з тим, що вам ${a3}`);


// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!