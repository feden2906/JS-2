// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     // this.order = order;
//     }
// }
//
// const nastia = new Client(143, 'Nastia', 'Veselova', 'veselova@gmail.com', '0937889546', ['шкарпетки', 'мило', 'рушник', 'капці']);
// const vera = new Client(2645, 'Vera', 'Ivanova', 'Ivanova@gmail.com', '0937564546', 'рушник', 'серветки', 'мило', 'іграшка', 'папір');
// const nika = new Client(3342, 'Nika', 'Voronova', 'Voronova@gmail.com', '0937889534', 'зошит', 'ручка', 'маркери', 'олівці', 'пакет', 'ластік', 'стікери', 'лінійка');
// const vasia = new Client(434, 'Vasia', 'Andreeva', 'Andreeva@gmail.com', '0937689546', 'лінійка', 'зошит', 'іграшка', 'серветки', 'олівці', 'шкарпетки', 'мило', 'капці');
// const mukola = new Client(587, 'Mukola', 'Vasil', 'Vasil@gmail.com', '0937889946', 'мило',  'зошит', 'резинка', 'лінійка');
// const max = new Client(4651, 'Max', 'Veselov', 'veselov@gmail.com', '0937779546', 'мило', 'капці', 'рушник' );
// const valera = new Client(6851, 'Valera', 'Varchyk', 'Varchyk@gmail.com', '0937779546', 'квіти');
// const timur = new Client(176, 'Timur', 'Honchar', 'Honchar@gmail.com', '0937884646', 'рушник', 'шампунь', 'мило', 'капці', 'серветки', 'шкарпетки', 'іграшка');
// const alina = new Client(515, 'Alina', 'Honcharova', 'Honcharova@gmail.com', '0937898546', 'іграшка', 'лінійка', 'олівці', 'маркер', 'папір', 'стирачка');
// const masha = new Client(18679, 'Masha', 'Veerova', 'Veerova@gmail.com', '0937854546', 'мило', 'рушник', 'капці', 'шкарпетки');
//
// let Clients = []
// Clients.push(nastia,vera,nika, vasia, mukola, max, valera, timur, alina, masha);
// console.log(Clients);
//
// Clients.sort(function(a, b){
//     if (a.order > b.order){
//         return 1
//     }
//     return -1;
// });

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// //додати в об'єкт функції:
// //-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// //-- info () - яка виводить всю інформацію про автомобіль
// //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //-- changeYear (newValue) - змінює рік випуску на значення newValue
// //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// //
//
//     function car(model, produser, year, maxSpeed, engine){
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину');
//     }
//     info(){
//         console.log('Модель', this.model, 'Виробник', this.produser, 'Рік випуску', this.year, 'Максимальна швидкість', this.maxSpeed, 'Обєм двигуна', this.engine);
//     }
//     // increaseMaxSpeed(newSpeed) {
//     // }
//     //
//     // changeYear(newValue) {
//     // }
//
// const car = new Cars('S', 'Tesla Ink.', '2012', '262 km/h', '310')
// car.drive();
// car.info();
// // car.increaseMaxSpeed();
// // car.changeYear();
//
// let driverP = {
//     name: 'Петро',
//     experiance: 17,
// }
// function addDriver(driver, experiance, whatToDo){
//     console.log('Машину доставить', driver);
//     console.log('Його досвід за кермом', experiance, 'років');
//     console.log('Машина прибула', whatToDo);
// }
// addDriver (driverP.name, driverP.experiance, 'Виходьте');

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- drive () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car{
//     constructor(model, produser, year, maxSpeed, engine){
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log('Їдемо зі швидкістю', this.maxSpeed, 'на годину')
//     }
//     drive1(){
//         console.log('Модель', this.model, 'Виробник', this.produser, 'Рік випуску', this.year, 'Максимальна швидкість', this.maxSpeed, 'Обєм двигуна', this.engine);
//     }
//     increaseMaxSpeed (newSpeed){}
//     changeYear (newValue){}
//     addDriver (driver){}
// }
// const car = new Car('S', 'Tesla Ink.', '2012', '262 km/h', '310')
// car.drive();
// car.drive1();
// // car.increaseMaxSpeed();
// // car.changeYear();
// let driverP = {
//     name: 'Петро',
//     experiance: 17,
// }
// function addDriver(driver, experiance, whatToDo){
//     console.log('Машину доставить', driver);
//     console.log('Його досвід за кермом', experiance, 'років');
//     console.log('Машина прибула', whatToDo);
// }
// addDriver (driverP.name, driverP.experiance, 'Виходьте');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Cinderella{
constructor(name, age, size){
    this.name = name
    this.age = age
    this.size = size
}
    }
const marina = new Cinderella('Marina', 17, 37);
const ira = new Cinderella('Ira', 13, 36);
const mira = new Cinderella('Mira', 14, 36);
const inna = new Cinderella('Inna', 14, 36);
const arina = new Cinderella('Arina', 16, 39);
const maria = new Cinderella('Maria', 16, 38);
const amina = new Cinderella('Amina', 12, 35);
const rina = new Cinderella('Rina', 13, 35);
const amira = new Cinderella('Amira', 15, 36);
const marianna = new Cinderella('Marianna', 15, 37);

let cinderellas = []
cinderellas.push(marina, ira, mira, inna, arina, maria, amina, rina, amira, marianna);
console.log(cinderellas);

class Prince{
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe
    }
}
const peter = new Prince('Peter', 19, 39);
console.log(peter);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// cinderellas.forEach(){
//     if(size === 39) {
//         return;
//     }
//     console.log()
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let number = cinderellas.find(function (shoe){
    return this.shoe === 39;
})
console.log(number); //що тут вписати аби показало в консолі?

function findShoe (name, shoe, whatToDo){
    console.log('Імя власниці', name)
    console.log('Роззмір туфельки', shoe)
    console.log('Створити пару?', whatToDo)
}
findShoe('Імя власниці', name)
