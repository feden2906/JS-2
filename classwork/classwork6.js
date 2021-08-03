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
            let detailsBtn = document.createElement('button');
            pUser.innerText = `${user.id} - ${user.title}`;
            detailsBtn.innerText = 'details';
            detailsBtn.onclick = function (){
                // console.log('print post of users', user.id);
                fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/comments`)
                    .then (value => value.json())
                    .then (value => {
                       let postsBox = document.getElementsByClassName('post-box')[0];
                       postsBox.innerText = '';
                       for (const post of value) {
                           console.log(post)
                            let liPost = document.createElement('li');
                            liPost.innerText = `${post.name}`;
                            postsBox.appendChild(liPost);
                        }
                       pUser.appendChild(postsBox);
                    })
            }
            pUser.appendChild(detailsBtn);
            usersBox.appendChild(pUser);
        }
    })
