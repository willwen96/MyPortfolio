export { myAlert, myConfirm, myPrompt };

let output = document.getElementById("output");
function myAlert() {
    let dialog = document.getElementById("alert-dialog")
    let ok_button = document.getElementById("alert-ok")

    ok_button.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.close()
    });
    dialog.showModal()
}

function myConfirm() {
    let dialog = document.getElementById("confirm-dialog")
    let cancel_button = document.getElementById("confirm-cancel")
    let ok_button = document.getElementById("confirm-ok")

    ok_button.addEventListener('click', (event) => {
        event.preventDefault();
        output.innerHTML = `<h3 style=\"border: 2px double; padding: 10px; width: fit-content\">Confirm Value: true </h3>`
        dialog.close()
    });
    cancel_button.addEventListener('click', (event) => {
        event.preventDefault();
        output.innerHTML = `<h3 style=\"border: 2px double; padding: 10px; width: fit-content\">Confirm Value: false </h3>`
        dialog.close()
    });
    dialog.showModal()
}

function myPrompt() {
    let dialog = document.getElementById("prompt-dialog")
    let cancel_button = document.getElementById("prompt-cancel")
    let ok_button = document.getElementById("prompt-ok")

    ok_button.addEventListener('click', (event) => {
        event.preventDefault();
        let input = document.getElementById("input").value
        input = input ? input : "User didn't enter anything";
        let sanitized = DOMPurify.sanitize(input);
        output.innerHTML = `<h3 style=\"border: 2px double; padding: 10px; width: fit-content\">Prompt Result: ${sanitized} </h3>`
        dialog.close();
    });

    cancel_button.addEventListener('click', (event) => {
        event.preventDefault();
        output.innerHTML = `<h3 style=\"border: 2px double; padding: 10px; width: fit-content\">Prompt Result: User didn't enter anything </h3>`
        dialog.close()
    });
    dialog.showModal()
}
// export function myConfirm(message, callback) {
//     const dialog = document.createElement('dialog');
//     dialog.innerHTML = `
//     <form method="dialog">
//       <h2>${DOMPurify.sanitize(title)}</h2>
//       <p>${DOMPurify.sanitize(message)}</p>
//       <menu>
//         <button value="cancel">Cancel</button>
//         <button value="ok">OK</button>
//       </menu>
//     </form>
//   `;
//
//     const cancelButton = dialog.querySelector('button[value="cancel"]');
//     cancelButton.addEventListener('click', () => {
//         dialog.close();
//         callback(false);
//     });
//
//     const okButton = dialog.querySelector('button[value="ok"]');
//     okButton.addEventListener('click', () => {
//         dialog.close();
//         callback(true);
//     });
//
//     document.body.appendChild(dialog);
//     dialog.showModal();
// }



