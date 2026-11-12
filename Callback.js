function getPostsCallback(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = () => {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);

            const sortedPosts = posts.sort(
                (a, b) => b.title.length - a.title.length
            );

            callback(sortedPosts);
        }
    };

    xhr.send();
}

getPostsCallback((data) => {
    console.log("Posts:");
    console.log(data);
});

function getCommentsCallback(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

    xhr.onload = () => {
        if (xhr.status === 200) {
            const comments = JSON.parse(xhr.responseText);

            const sortedComments = comments.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            callback(sortedComments);
        }
    };

    xhr.send();
}

getCommentsCallback((data) => {
    console.log("Comments:");
    console.log(data);
});