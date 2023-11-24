export enum ColorAttributes{

}

export default class chooseColor extends HTMLElement{
    
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
        
            const colorContainer = this.ownerDocument.createElement ("div")
            const titleColor = this.ownerDocument.createElement ("h1")
            titleColor.innerText = "Pick a color"
            const colorInput = this.ownerDocument.createElement ("input");
            colorContainer.appendChild(titleColor)
            colorContainer.appendChild(colorInput);
            this.shadowRoot?.appendChild(colorContainer); 
        }
    }
}

customElements.define("player-color", chooseColor);