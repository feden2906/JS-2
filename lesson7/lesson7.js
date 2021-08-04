// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою
//     промісів та async await
//     (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка.
// При тому ваші дії мають бути синхронізовані.

//1
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
wakeUp('7-00', (err, wakeUp) => {
    if(err){
        console.error(err)
    } else{
        getUp();
        console.log(wakeUp)
    }
});



//2
function washFace (time, cb){
    setTimeout(() => {
        console.log('вмивайся');
        if (time < '7-15'){
            console.log('іди в ванну', null)
            cb('повзи давай')
        } else {
            console.log('чисть зуби')
            cb(null, 'воду закрий')
        }
    }, 100)
}
function getDressed() {
    setTimeout(() => {
        console.log('одягайся')
    }, 116)
}

washFace('7-25', (err, washFace) => {
    if(err){
        console.error(err)
    } else {
getDressed();
console.log(washFace)
    }
})


//3
function breakfast (money, cb){
    setTimeout(()=>{
        console.log('Ваше замовлення')
        if(money < 50){
            console.log('яєшня', null)
            cb('вам вистачить лише на')
        } else{
            console.log('англійський сніданок')
            cb (null, 'смачного')
        }
        },1000);
}

function enjoy(){
    setTimeout(() => {
        console.log('смачного')
    }, 230)
}
breakfast(100, (err, breakfast) => {
    if (err){
        console.log(err)
    } else {
        enjoy()
        console.log(breakfast)
    }
})


//4
function manicure(money, cb){
    setTimeout(()=> {
        console.log('Зробити манікюр')
        if(money < 450){
            console.log('маленький бюджет', null)
            cb('можемо запропонувати гігієнічний')
        } else {
            console.log('комбінований')
            cb(null, 'ваш майстер')
        }
    }, 1400);
}
function nailMaster(){
    setTimeout(() =>{
        console.log('Аліна')
    }, 150)
}
manicure(475, (err, manicure) => {
    if(err){
        console.error(err)
    } else {
        nailMaster()
        console.log(manicure)
    }
})

//5

function goToWork (money, cb){
    setTimeout(()=>{
        console.log('Добратись на роботу')
        if(money < 75){
            console.log('на автобусі', null)
            cb('купуй квиток')
        } else {
            console.log('на таксі')
            cb(null, 'сьогодні лухарі')
        }
    }, 3000);
}
function onTaxy(){
    setTimeout(() => {
        console.log('їдь на таксі')
    }, 200)
}
goToWork(100, (err, goToWork)=>{
    if (err){
        console.error(err)
    } else {
        onTaxy();
        console.log(goToWork)
    }
})


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
