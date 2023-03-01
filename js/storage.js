export { load }

function load() {
    let posts = localStorage.getItem("posts");
    if (posts) {
        return JSON.parse(posts);
    } else {
        return [];
    }
}
