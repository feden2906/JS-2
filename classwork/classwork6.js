//    1.
//    Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//    https://jsonplaceholder.typicode.com/posts
//    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
//    поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        let usersBox = document.getElementsByClassName('users-box')[0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.title}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'details';
            detailsBtn.onclick = function (){
                // console.log('print post of users', user.id);
                fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`)
                    .then (value => value.json())
                    .then (value => {
                       let postsBox = document.getElementsByClassName('post-box')[0];
                        for (const post of value) {
                            let liPost = document.createElement('li');
                            liPost.innerText = `${post}`;
                            postsBox.append(liPost);
                        }
                    })
            }
            pUser.appendChild(detailsBtn);
            usersBox.append(pUser);
        }
    })
