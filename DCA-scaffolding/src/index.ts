import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        const player = this.ownerDocument.createElement("the-player");
        something.appendChild(player)
    }
}

customElements.define('app-container', AppContainer)
export default AppContainer