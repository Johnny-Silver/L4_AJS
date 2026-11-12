async function getPostsAsync() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        return posts.sort(
            (a, b) => b.title.length - a.title.length
        );
    } catch (error) {
        console.error(error);
    }
}

getPostsAsync().then(data => console.log(data));

async function getCommentsAsync() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );

        const comments = await response.json();

        return comments.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } catch (error) {
        console.error(error);
    }
}

getCommentsAsync().then(data => console.log(data));

async function getUsersAsync() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        return users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
    } catch (error) {
        console.error(error);
    }
}

getUsersAsync().then(data => console.log(data));

async function getTodosAsync() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        const todos = await response.json();

        return todos.filter(todo => !todo.completed);
    } catch (error) {
        console.error(error);
    }
}

getTodosAsync().then(data => console.log(data));