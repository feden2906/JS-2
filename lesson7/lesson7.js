// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою
//     промісів та async await
//     (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка.
// При тому ваші дії мають бути синхронізовані.

function wakeUp(time, cb) {
    setTimeout(() => {
        console.log('потрібно прокинутись');
        if (time < '7-00') {
            console.log('спи', null);
            cb('ще рано');
        } else {
            console.log('прокидайся')
            cb(null, 'зараз');
        }
    }, 300)
}
function getUp(){
    setTimeout(() =>{
        console.log('вставай з ліжка')
    }, 111)
}

wakeUp('5-59', (err, wakeUp) => {
    if(err){
        console.error(err)
    } else
        getUp();
    console.log(wakeUp)
});


// function breakfast (money, cb){
//     setTimeout(()=>{
//         console.log('Ваше замовлення')
//         if(money < 50){
//             console.log('яєшня')
//         } else{
//             console.log('англійський сніданок')
//         }
//         },1000);
// }
// breakfast(250)


// function manicure(money, cb){
//     setTimeout(()=> {
//         console.log('Зробити манікюр')
//         if(money < 450){
//             console.log('гігієнічний')
//         } else {
//             console.log('комбінований')
//         }
//     }, 1400);
// }
// manicure(475)


// function goToWork (money, cb){
//     setTimeout(()=>{
//         console.log('Добратись на роботу')
//         if(money > 75){
//             console.log('на таксі')
//         } else {
//             console.log('на автобусі')
//         }
//     }, 3000);
// }
// goToWork(35)


// function coffe(money, cb){
//     setTimeout(()=>{
//         console.log('купити каву')
//         if(money >45){
//             console.log('айс лате')
//         } else {
//             console.log('американо')
//         }
//     }, 700);
// }
// coffe(24)


//     setTimeout(()=>{
//         console.log('Поговорити з подругою')
//     }, 1500);

//     setTimeout(()=>{
//         console.log('Зварити каву')
//     }, 100);

//     setTimeout(()=>{
//         console.log('Посперечатись')
//     }, 450);

//     setTimeout(()=>{
//         console.log('Сходити на треню')
//     }, 2200);

//     setTimeout(()=>{
//         console.log('Читати книгу')
//     }, 860);

//     setTimeout(()=>{
//         console.log('Розпланувати бюджет')
//     }, 1150);

//     setTimeout(()=>{
//         console.log('Обрати плаття')
//     }, 890);

//     setTimeout(()=>{
//         console.log('Пообідати')
//     }, 1250);
