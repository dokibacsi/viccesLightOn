export default class Mezo{

    #szulElem
    #light
    #index

    constructor(light, index, szulElem){
        this.#index = index;
        this.#light = light;
        this.#szulElem = szulElem
        this.mkiir(this.#light, this.#index, this.#szulElem);

        this.gombElem = $(`.mezo${this.#index}`);
        this.colorChanger();
        this.gombFelkapcs();
    }

    mkiir(light, index, szulElem){
        let txt = `<div id = "mezo" class = "mezo${index}"> </div>`
        szulElem.append(txt);
    }

    colorChanger(){
            if(this.#light == true){
                this.gombElem.css("background-color", "green");
            }else{
                this.gombElem.css("background-color", "orange");
            }
    }

    gombFelkapcs(){
        this.gombElem.on("click", () => {
            const e = new CustomEvent("katt", { detail:this.#index});
            window.dispatchEvent(e);
        })
    }
}