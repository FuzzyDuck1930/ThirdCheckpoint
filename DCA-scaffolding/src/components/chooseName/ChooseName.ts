export enum NameAttributes{

}

export default class chooseName extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        
            const nameContainer = this.ownerDocument.createElement("div");
            const nameLetter = this.ownerDocument.createElement ("h1");
            nameLetter.innerText = "What's your name?"
            const nameInput = this.ownerDocument.createElement ("input");
            nameContainer.appendChild(nameLetter)
            nameContainer.appendChild(nameInput);
            this.shadowRoot?.appendChild(nameContainer);
        }
    }
}

customElements.define("player-name", chooseName);