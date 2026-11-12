function getUsersPromise() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users =>
            users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }))
        );
}

getUsersPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));

function getTodosPromise() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todos =>
            todos.filter(todo => !todo.completed)
        );
}

getTodosPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));