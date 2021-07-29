// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на
// // назву групи в якій ви вчитесь (mon-year)
//
// let elementByIdHeader = document.getElementById('main_header');
// elementByIdHeader.innerHTML = '<h1>june-2021</h1>';
// elementByIdHeader.style.color = 'blue';

// // b) робить шириниу елементу ul 400px
// let elementsByTagNameLi = document.getElementsByTagName('ul');
// for (const ul of elementsByTagNameLi) {
//  ul.style.width = '400px';
//  ul.style.padding = '0';
// }

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassNameLinkList = document.getElementsByClassName('linkList');
// for (const linkList of elementsByClassNameLinkList) {
//     linkList.style.width = '50%';
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
// let elementsByClassNameListElement2 = document.getElementsByClassName('listElement2');
// console.log(elementsByClassNameListElement2);

// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementsByTagNameLi = document.getElementsByTagName('li');
// for (const li of elementsByTagNameLi) {
//     li.style.backgroundColor = 'silver';
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
// let elementsByTagNameA = document.getElementsByTagName('a');
// for (const item of elementsByTagNameA) {
//     item.classList.add('anchor');
//     console.log(elementsByTagNameA);
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementsByTagName = document.getElementsByTagName('a');
// for (const itemA of elementsByTagName) {
//     if (itemA.innerText === 'link3'){
// itemA.style.fontSize = '40px';
// console.log(itemA);
//     }
//     console.log(itemA.innerText);
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elementsByTagNameA= document.getElementsByTagName('a');
for (const elementA of elementsByTagNameA) {
    elementA.classList.add('element_');
    console.log(elementA);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let classNameSubHeader = document.getElementsByClassName('sub-header');
for (const classNameSubHeaderElement of classNameSubHeader) {
    classNameSubHeaderElement.style.backgroundColor = prompt()
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// l) отримати елементи p та змінити їм padding на 20px

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
