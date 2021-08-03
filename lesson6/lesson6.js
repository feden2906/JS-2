// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => {return response.json();})
// .then(users => {console.log(users);
// let userBox = document.getElementsByClassName('users-box')[0];
//     for (const user of users) {
//         let pUser = document.createElement('p')
//         pUser.innerText = `${user.id} - ${user.title}`
//         userBox.append(pUser)
//     }
// });

// //     2.
// //     // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// //     // https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => {return response.json();})
//     .then(users => {console.log(users);
//         let userBox = document.getElementsByClassName('users-box')[0];
//         for (const user of users) {
//             let pUser = document.createElement('p')
//             pUser.innerText = `${user.id} - ${user.email}`
//             userBox.append(pUser)
//         }
//     })
