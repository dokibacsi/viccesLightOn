import Mezo from "./Mezo.js";

export default class View{
    #list = {}
    #szulElem

    constructor(list, szulElem){
        this.#list = list;
        this.#szulElem = szulElem;
        this.#szulElem.empty();
        this.pkiir(this.#szulElem);
    }

    pkiir(szulElem){
        this.#list.forEach((elem, index) => {
            new Mezo(elem, index, szulElem);
        });
    }
}