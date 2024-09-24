import Modell from "../Modell/Modell.js";
import View from "../View/View.js";

export default class Controller{
    constructor(){
        const MODELL = new Modell();
        const list = MODELL.getList();
        this.szulElem = $(".palya");
        new View(list, this.szulElem);
        this.#esemenykez(MODELL);
        
    }

    
    #esemenykez(MODELL){
        $(window).on("katt", (event)=> {
            MODELL.lampaValtas(event.detail);
            new View(MODELL.getList(), this.szulElem);

        });
    }

}