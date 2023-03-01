export {add}
import './styledBlog.js'

let dialog = document.getElementById("prompt-dialog")
let cancel_button = document.getElementById("cancel")
let ok_button = document.getElementById("add")

/**
 * add a post to the list
 **/
function addPost() {
    event.preventDefault();
    let title = document.getElementById("title").value
    let date = document.getElementById("date").value
    let summary = document.getElementById("summary").value

    // If any of the input fields is null, alert the user
    if (! (title && date && summary)) {
        myAlert();
        return;
    }

    // purify the users' inputs
    title = DOMPurify.sanitize(title)
    summary = DOMPurify.sanitize(summary)

    let post = {title: `${title}`, date: `${date}`, summary: `${summary}`}
    posts.push(post)

    // save the new post into local array
    localStorage.setItem("posts", JSON.stringify(posts));

    ok_button.removeEventListener('click', addPost)
    cancel_button.removeEventListener('click', cancelPost)

    dialog.close();
    updatePosts()
}

/**
 * cancel the addition of new post and close the modal
 **/
function cancelPost() {
    event.preventDefault()

    ok_button.removeEventListener('click', addPost)
    cancel_button.removeEventListener('click', cancelPost)

    dialog.close();
}

/**
 * add event listener to the prompt's buttons
 **/
function add() {
    ok_button.addEventListener('click', addPost)
    cancel_button.addEventListener('click', cancelPost)
    dialog.showModal()
}