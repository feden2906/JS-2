// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою
//     промісів та async await
//     (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка.
// При тому ваші дії мають бути синхронізовані.

//1
function wakeUp(time) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('потрібно прокинутись');
            if (time < '7-00') {
                console.log('спи');
                reject ('ще 5 хв');
            } else {
                console.log('прокидайся')
                resolve ('час вставати');
            }
        }, 300)
    })
}
function getUp(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('вставай з ліжка')
            resolve('застели постіль')
        }, 111)
    })
}
function washFace (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('вмивайся');
            resolve('воду закрий')
        }, 100)
    })
}
function getDressed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('одягайся')
            resolve('швидко')
        }, 116)
    })
}
function breakfast (money){
    return new Promise((resolve, result) => {
        setTimeout(()=>{
            console.log('Ваше замовлення')
            console.log('англійський сніданок')
            resolve('смачного')
        },1000);
    })
}
function pay(money){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
          console.log('ваш рахунок')
          resolve('оплатити рахунок')
      }, 540)
    })
}
function manicure(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Зробити манікюр')
            resolve('ваш майстер Аліна')
        }, 1400);
    })
}
function goToWork (money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Добратись на роботу')
            resolve('біжи на автобус')
        }, 3000);
    })
}
function coffe(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('купити каву')
            resolve('американо')
        }, 700);
    })
}
function talkToFriend(time){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Поговорити з подругою')
            resolve('розказати новини')
        }, 1500);
    }))
}
function chat(time){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('відписатись в чатіку')
            resolve('мемасікі вогонь')
        }, 360);
    }))
}
 function goToGym(time){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
        console.log('Сходити на треню')
            resolve('відпрацювати кроваві техніки')
    }, 2200);
    }))
 }
 function readTheBook(time){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Читати книгу')
            resolve('записати круті думки')
        }, 860);
    }))
 }
function bujet(money){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Розпланувати бюджет')
            resolve('запланувати покупку')
        }, 1150);
    }))
}
function byDress(money){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Обрати плаття')
            resolve('купити найкрасивіше')
        }, 890);
    }))
}
function lanch(money){
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Пообідати')
            resolve('комплексний обід')
        }, 1250);
    }))
}

wakeUp('7-00')
    .then((value) =>{
        console.log(value);
        return getUp();
    })
    .then((value) =>{
        console.log(value);
        return washFace();
    })
    .then((value) =>{
        console.log(value);
        return getDressed();
        })
    .then((value) => {
        console.log(value);
        return breakfast();
    })
    .then((value) => {
        console.log(value);
        return pay();
    })
    .then((value) => {
        console.log(value);
        return manicure();
    })
    .then((value) => {
        console.log(value);
        return goToWork();
    })
    .then((value) => {
        console.log(value);
        return coffe();
    })
    .then((value) => {
        console.log(value);
        return talkToFriend();
    })
    .then((value) => {
        console.log(value);
        return chat();
    })
    .then((value) => {
        console.log(value);
        return goToGym();
    })
    .then((value) => {
        console.log(value);
        return readTheBook();
    })
    .then((value) =>{
        console.log(value);
        return bujet();
    })
    .then((value) =>{
        console.log(value);
        return byDress();
    })
    .then((value) =>{
        console.log(value);
        return lanch();
    })
    .catch(reason =>{
        console.log('*** ERROR ****')
        console.log(reason)
        console.log('**** ERROR ****')
    })

