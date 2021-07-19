// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a1 = 'hello';
// console.log(a1);
// alert(a1);
// document.write(a1);
//
// let a2 = 'owu';
// console.log(a2);
// alert(a2);
// document.write(a2);
//
// let a3 = 'com';
// console.log(a3);
// alert(a3);
// document.write(a3);
//
// let a4 = 'ua';
// console.log(a4);
// alert(a4);
// document.write(a4);
//
// let a5 = '1';
// console.log(a5);
// alert(a5);
// document.write(a5);
//
// let a6 = '10';
// console.log(a6);
// alert(a6);
// document.write(a6);
//
// let a7 = '-999';
// console.log(a7);
// alert(a7);
// document.write(a7);
//
// let nu = '123';
// console.log(nu);
// alert(nu);
// document.write(nu);
//
// let p = '3.14';
// console.log(p);
// alert(p);
// document.write(p);
//
// let b1 = '2.7';
// console.log(b1);
// alert(b1);
// document.write(b1);
//
// let b2 = '16';
// console.log(b2);
// alert(b2);
// document.write(b2);
//
// let b3 = 'true'
// console.log(b3);
// alert(b3);
// document.write(b3);
//
// let b4 = 'false';
// console.log(b4);
// alert(b4);
// document.write(b4);

// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let a1 = 'hello';
// a1 = 'hi';
// console.log(a1);
// alert(a1);
// document.write(a1);
//
// let a2 = 'owu';
// a2 = 'Okten';
// console.log(a2);
// alert(a2);
// document.write(a2);
//
// let a3 = 'com';
// a3 = 'org';
// alert(a3);
// document.write(a3);
//
// let a4 = 'ua';
// a4 = 'eng';
// alert(a4);
// document.write(a4);
//
// let a5 = '1';
// a5 = '100';
// alert(a5);
// document.write(a5);

// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// let firstName = 'Анастасія';
// console.log(firstName);
// let middleName = 'Андріївна';
// console.log(middleName);
// let lastName = 'Тищенко';
// console.log(lastName);
// document.write(firstName + ' ' + middleName + ' ' + lastName);

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('імя');
// console.log(name);
// let middleName = prompt('по батькові');
// console.log(middleName);
// let years = prompt('вік');
// console.log(years);
// // Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// document.write(`Вітаю ${name} ${middleName}. Тобі ${years} років.`);

// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(typeof a);
// let b = '100';
// console.log(typeof b);
// let c = true;
// console.log(typeof c);

// // - Поставте відповідний оператор в виразах що б вийшов відповідний результат.
// //     В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
//     5 = 6 -> false
//     5 > 6 -> false
//     5 <= 6 -> false
//     10 = 10 -> true
//     10 == 10 -> true
//     10 > 10 -> false
//     10 < 10 -> false
//     10 <= 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
//
// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));