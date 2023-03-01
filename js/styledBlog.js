let posts

/**
 * initialize the array by getting posts from local storage
 **/
function init() {
    posts = localStorage.getItem("posts");
    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }
    updatePosts();
}

init();

/**
 * alert the users about their actions
 **/
function myAlert() {
    let dialog = document.getElementById("alert-dialog");
    let ok_button = document.getElementById("alert-ok");

    ok_button.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.close();
    });
    dialog.showModal();
}

/**
 * update the posts every time an addition/edition/deletion has been made
 **/
function updatePosts() {
    let list = "";
    // append a list to <ul> for every post
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        list +=
        `<li>
            <div class="blog">
                <section>
                    <p class="title">${post.title}</p>
                    <p class="date">${post.date}</p>
                </section>
                <section>
                    <img src="public/edit.png" alt="edit icon" width="24" height="24" onClick="editListener(${i})">
                    <img src="public/delete.png" alt="delete icon" width="30" height="30" onclick="deleteListener(${i})">
                </section>
                <section class="summary">${post.summary}</section>
            </div>
        </li>`
    }
    document.querySelector("#blog-list").innerHTML = list;
}

/**
 * listener for each post's edit button
 *
 * @param index - index of the post in the array
 **/
function editListener(index) {
    let edit_dialog = document.getElementById('edit-dialog');
    edit_dialog.innerHTML = `
        <form id="edit-form"></form>
        <table>
            <tr>
                <td>
                    <label for="edit-title" form="edit_form">Title</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" id="edit-title" name="edit-title" form="edit_form" required>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="date" form="edit_form">Date</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="date" id="edit-date" name="edit-date" form="edit_form" required>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="summary" form="edit_form">Summary</label>
                </td>
            </tr>
            <tr>
                <td>
                    <textarea id="edit-summary" name="summary" placeholder="Write a brief summary" rows="4" cols="30" form="edit_form" required></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <button id="edit-cancel" form="edit_form" onclick="cancelEdit()">Cancel</button>
                </td>
                <td>
                    <button id="edit" form="edit_form" onclick="editPost(${index})">Edit</button>
                </td>
            </tr>
        </table>
    `
    edit_dialog.showModal();
}

/**
 * edit the post's content
 *
 * @param index - index of the post in the array
 **/
function editPost(index) {
    let edit_dialog = document.getElementById("edit-dialog");
    let title = document.getElementById('edit-title').value;
    let date = document.getElementById('edit-date').value;
    let summary = document.getElementById('edit-summary').value;

    // If any of the input fields is null, alert the user
    if (! (title && date && summary)) {
        myAlert();
        return;
    }
    posts[index].title = title;
    posts[index].date = date;
    posts[index].summary = summary;
    localStorage.setItem('posts', JSON.stringify(posts));
    edit_dialog.close();
    updatePosts();
}

/**
 * cancel the edition and close the modal
 **/
function cancelEdit() {
    let edit_dialog = document.getElementById("edit-dialog");
    edit_dialog.close();
}

/**
 * listener for each post's delete button
 *
 * @param index - index of the post in the array
 **/
function deleteListener(index) {
    let confirm_dialog = document.getElementById('confirm-dialog');
    confirm_dialog.innerHTML = `
        <form>
            <h4>Deleting this blog?</h4>
            <button id="confirm-cancel" onclick="cancelDelete()">Cancel</button>
            <button id="confirm-ok" onclick="deletePost(${index})">OK</button>
        </form>
    `
    confirm_dialog.showModal();
}

/**
 * delete the post at the specified index
 *
 * @param index - index of the post in the array
 **/
function deletePost(index) {
    let confirm_dialog = document.getElementById("confirm-dialog")

    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));

    confirm_dialog.close();
    updatePosts();
}

/**
 * cancel the deletion and close the modal
 **/
function cancelDelete() {
    let confirm_dialog = document.getElementById("confirm-dialog");
    confirm_dialog.close();
}
