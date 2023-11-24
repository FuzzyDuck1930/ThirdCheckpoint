export enum LetterAttributes{

}

export default class chooseLetter extends HTMLElement{
    
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
        
            const letterContainer = this.ownerDocument.createElement("div");
            const titleLetter = this.ownerDocument.createElement ("h1");
            titleLetter.innerText = "Pick a letter"
            const letterInput = this.ownerDocument.createElement ("input");
            letterContainer.appendChild(titleLetter)
            letterContainer.appendChild(letterInput);
            this.shadowRoot?.appendChild(letterContainer);
        }
    }
}

customElements.define("player-letter", chooseLetter);