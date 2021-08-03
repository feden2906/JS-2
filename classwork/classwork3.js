// // - створити функцію яка приймає масив та виводить його
// function native(){
//     document.write(`<div>hello world</div>`);
// }
// native();

// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minMax (10, 18, 33){
//         let min = arguments[0];
//     for (i = 0; i = arguments.length; i++){
//         if (arguments[i] < min){
//             min = arguments[i];
//         }
//      }
//     return min;
//     }
//     console.log(min);
//
// console.log(minMax(10, 18, 33))

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function minMax (){
//     let max = arguments[0];
//     for (i = 0; i = arguments.length; i++){
//         if (arguments[i] >= max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(min);
//
// console.log(minMax(10, 18, 33))

// // - створити функцію яка повертає найбільше число з масиву
let mass = []
function (){
    for (const mas of mass) {

    }
}

// // - створити функцію яка повертає найменьше число з масиву
// let numbers = function (i) {return (let i = 0, i > numbers.length, i++)};

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers = function (a,b) {return (a + b)};
function sum(){
    for (const argument of arguments) {
        let i = 0
        i++
    }
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = function (a,b) {return (a + b) / numbers.length};

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// //     Для виведення використати попередню функцію.
    function randomMass () {
        let arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.round(Math.random() * 100));
        }
        return arr;
    }

    let result = randomMass();
    console.log(result);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]