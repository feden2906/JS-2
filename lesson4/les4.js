// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// function randomMass (){
//     Math.floor(Math.random() * 100)
// }
//     // Math.round(Math.random(i)*100)
//     // return Math.round()
//
// //     let Math.round = randomMass(min, max)
// // console.log(Math.round);




// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function user(id, name, surname, email, phone){
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
let emptyMas = []
const aa = new user(23424, 'aa', 'ваива')
const ab = new user(24523423, 'ab', 'апріа')
const ac = new user(85485, 'ac', 'іар')
const ad = new user(345345, 'ad', 'іапі')
const ae = new user(345345, 'ae', 'іра')
const af = new user(345345, 'af', 'солвенп')
const ag = new user(345354, 'ag', 'чаок')
const ah = new user(2433, 'ah', 'кіркі')
const ai = new user(2543, 'ai', 'мкер')
const aj = new user(8843, 'aj', 'мркер')

;
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)