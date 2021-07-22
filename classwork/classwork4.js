// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client{
    constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
    }
}
const nastia = new Client(143, 'Nastia', 'Veselova', 'veselova@gmail.com', '0937889546', 5);
const vera = new Client(2645, 'Vera', 'Ivanova', 'Ivanova@gmail.com', '0937564546', 8);
const nika = new Client(3342, 'Nika', 'Voronova', 'Voronova@gmail.com', '0937889534', 4);
const vasia = new Client(434, 'Vasia', 'Andreeva', 'Andreeva@gmail.com', '0937689546', 2);
const mukola = new Client(587, 'Mukola', 'Vasil', 'Vasil@gmail.com', '0937889946', 11);
const max = new Client(4651, 'Max', 'Veselov', 'veselov@gmail.com', '0937779546', 5);
const valera = new Client(6851, 'Valera', 'Varchyk', 'Varchyk@gmail.com', '0937779546', 3);
const timur = new Client(176, 'Timur', 'Honchar', 'Honchar@gmail.com', '0937884646', 1);
const alina = new Client(515, 'Alina', 'Honcharova', 'Honcharova@gmail.com', '0937898546', 8);
const masha = new Client(18679, 'Masha', 'Veerova', 'Veerova@gmail.com', '0937854546', 7);

let Clients = []
Clients.push(nastia,vera,nika, vasia, mukola, max, valera, timur, alina, masha);
console.log(Clients);

Clients.sort(function(a, b){
    if (a.order > b.order){
        return 1
    }
    return -1;
});



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
