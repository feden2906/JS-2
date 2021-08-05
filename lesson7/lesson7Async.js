function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('новий день');
            if (time < '7-00') {
                console.log('спи');
                reject('ще 5 хв');
            }
            console.log('прокидайся')
            resolve('час вставати');
        }, 300)
    })
}

function getUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('вставай з ліжка')
            resolve('застели постіль')
        }, 111)
    })
}

function washFace(time) {
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

function breakfast(money) {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            console.log('Ваше замовлення')
            console.log('англійський сніданок')
            resolve('смачного')
        }, 1000);
    })
}

function pay(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ваш рахунок')
            resolve('оплатити рахунок')
        }, 540)
    })
}

function manicure(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Зробити манікюр')
            resolve('ваш майстер Аліна')
        }, 1400);
    })
}

function goToWork(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Добратись на роботу')
            resolve('біжи на автобус')
        }, 3000);
    })
}

function coffe(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('яку каву будете?')
            if (money < 50) {
                console.log('американо')
                reject('мало грошей')
            }
            console.log('купити каву')
            resolve('айс лате')
        }, 700);
    })
}

function talkToFriend(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Поговорити з подругою')
            resolve('розказати новини')
        }, 1500);
    }))
}

function chat(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('відписатись в чатіку')
            resolve('мемасікі вогонь')
        }, 360);
    }))
}

function goToGym(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Сходити на треню')
            resolve('відпрацювати кроваві техніки')
        }, 2200);
    }))
}

function readTheBook(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Читати книгу')
            resolve('записати круті думки')
        }, 860);
    }))
}

function bujet(money) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Розпланувати бюджет')
            resolve('запланувати покупку')
        }, 1150);
    }))
}

function byDress(money) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('пошук ідеального плаття')
            if(money < 400){
                console.log('на жаль, у нас немає нічого за вашу суму')
                reject('мало грошей')
            }
            console.log('чим можу вам допомогти?')
            resolve('опкажіть найкрасивіше плаття')
        }, 890);
    }))
}

function lanch(money) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('Пообідати')
            resolve('комплексний обід')
        }, 1250);
    }))
}

async function wakeup(){
    try {
        const wake = await getUp();
        console.log(wake, 'Підйом');

        const wash = await washFace();
        console.log(wash, 'вмивайся');

        const dressUp = await getDressed();
        console.log(dressUp, 'одягайся');

        const eat = await breakfast();
        console.log(eat, 'їж');

        const paeCheck = pay();
        console.log(paeCheck, 'заплати рахунок');

        const nail = await manicure();
        console.log(nail, 'красивий манікюр');

        const work = await goToWork();
        console.log(work, 'you late');

        const getCoffe = await coffe();
        console.log(getCoffe, 'its hot');

        const friends = await talkToFriend();
        console.log(friends, 'nice to see you');

        const chating = await chat();
        console.log(chating, 'lol');

        const gym = await goToGym();
        console.log(gym, 'without struggle there is no progress');

        const book = await readTheBook();
        console.log(book, 'nice book');

        const money = await bujet();
        console.log(money, 'were is my money?');

        const dress = await byDress();
        console.log(dress, 'can i pay by cash?');

        const eatLanch = await lanch();
        console.log(eatLanch, 'thanks');

    } catch (err){
        console.log(err)
    }
}
    wakeup('6-00');