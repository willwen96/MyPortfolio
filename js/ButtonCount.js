class ButtonCount extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.innerHTML =
            `
            <style>
                button {
                  background-color: tomato;
                  color: white;
                  font-size: 19px;
                  padding: 5px 10px;
                }
            </style>
            `;
        const count_button = document.createElement('button')
        let count = 0;

        function showCount() {
            count_button.textContent = `Times Clicked: ${count}`;
        }

        showCount();

        count_button.addEventListener('click', () => {
            count++;
            showCount();
        });

        shadow.appendChild(count_button);
    }
}

customElements.define('button-count', ButtonCount);