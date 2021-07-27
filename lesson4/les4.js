// // // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// for (let i = 0; i < 100; i++) {
//     function randomMass (){
//        return Math.round(Math.random()*100)
// }
// console.log();
// }


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.


// // // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let numbers = []
// for (let i = 0; i < 100; i++) {
//     function randomMass (){
//         return Math.round(Math.random()*100)
//     }
//
// }

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// let mass = [11, 222, 345, 434, 3, 43, 436, 76, 58, 56, 54, 97, 36, 785]
// for (const mas of mass) {
//     let mas = mass.filter(
//         function (number){
//             return mas % 2 !== 0
//         }
//        )
// }
// console.log(true)


// // // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let mass = [11, 222, 345, 434, 3, 43, 436, 76, 58, 56, 54, 97, 36, 785]
// let map = mass.map(function (value)
// {
//     return{
//         name: value
//     }
// })
//
// function getItem(callBack, number){
//     console.log('Покажи мені', number);
// }
// getItem('fgbvla',11)


// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user = []
// const aa = new User(23424, 'aa', 'ваива', 'avbivbib@gmail.com', 45346);
// const ab = new User(24523423, 'ab', 'апріа', 'avbivbib@gmail.com', 245624);
// const ac = new User(85485, 'ac', 'іар', 'avbivbib@gmail.com', 2464565);
// const ad = new User(345345, 'ad', 'іапі', 'avbivbib@gmail.com', 45645);
// const ae = new User(345345, 'ae', 'іра', 'avbivbib@gmail.com', 34652465);
// const af = new User(345345, 'af', 'солвенп', 'avbivbib@gmail.com', 45624);
// const ag = new User(345354, 'ag', 'чаок', 'avbivbib@gmail.com', 24562);
// const ah = new User(2433, 'ah', 'кіркі', 'avbivbib@gmail.com', 25626);
// const ai = new User(2543, 'ai', 'мкер', 'avbivbib@gmail.com', 25462);
// const aj = new User(8843, 'aj', 'мркер', 'avbivbib@gmail.com', 256256);
//
// user.push(aa, ab, ac, ad, ae, af, ag, ah, ai, aj);
// console.log(user);

// // Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user = []
// const aa = new User(23424, 'aa', 'ваива', 'avbivbib@gmail.com', 45346);
// const ab = new User(24523423, 'ab', 'апріа', 'avbivbib@gmail.com', 245624);
// const ac = new User(85485, 'ac', 'іар', 'avbivbib@gmail.com', 2464565);
// const ad = new User(345345, 'ad', 'іапі', 'avbivbib@gmail.com', 45645);
// const ae = new User(345345, 'ae', 'іра', 'avbivbib@gmail.com', 34652465);
// const af = new User(345345, 'af', 'солвенп', 'avbivbib@gmail.com', 45624);
// const ag = new User(345354, 'ag', 'чаок', 'avbivbib@gmail.com', 24562);
// const ah = new User(2433, 'ah', 'кіркі', 'avbivbib@gmail.com', 25626);
// const ai = new User(2543, 'ai', 'мкер', 'avbivbib@gmail.com', 25462);
// const aj = new User(8843, 'aj', 'мркер', 'avbivbib@gmail.com', 256256);
//
// user.push(aa, ab, ac, ad, ae, af, ag, ah, ai, aj);
// console.log(user);
//
// let idF = user.id.filter(function (id){
//     return (user.id % 2) !== 0
// })
// console.log(idF)
//
// user.id.sort(function(a, b){
//     console.log(a, 'a')
//     console.log(b, 'b')
//     return a - b
// })