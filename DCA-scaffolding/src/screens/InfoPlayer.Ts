import "./components/export"
import { collection, doc, setDoc } from "firebase/firestore"; 

class MyPlayer extends HTMLElement{
    
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
        
            const whole = this.ownerDocument.createElement ("div");

            const NameInput = this.ownerDocument.createElement ("player-name");
            whole.appendChild(NameInput);

            const ColorInput = this.ownerDocument.createElement ("player-color");
            whole.appendChild(ColorInput); 

            const LetterInput = this.ownerDocument.createElement ("player-letter");
            whole.appendChild(LetterInput);

            const uploadButton = this.ownerDocument.createElement ("button");
            uploadButton.innerText = "Next :D"
            uploadButton.addEventListener("click", ()=>{
                
            })
            whole.appendChild(uploadButton);

            this.shadowRoot.appendChild(whole);

        }
    }
}

customElements.define("the-player", MyPlayer);
export default MyPlayer