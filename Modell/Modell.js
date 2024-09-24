export default class Modell {

    #index;

    constructor() {
        this.list = [false, false, false, false, false, false, false, false, false];
        this.#index = 0;
        this.countOffLights(this.list);
    }

    lampaValtas(index) {
        this.#index = index;
        //INDEX LAMPA VALTAS
        if (this.list[this.#index] == true) {
            this.list[this.#index] = false;
        } else {
            this.list[this.#index] = true;
        }
        //NEM BAL OLDAL
        if (!(this.#index % 3 == 0)) {
            this.#index = this.#index - 1;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
            } else {
                this.list[this.#index] = true;
            }
        }
        //NEM JOBB OLDAL
        if (!(this.#index % 3 == 2)) {
            this.#index = this.#index + 1;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
            } else {
                this.list[this.#index] = true;
            }
        }
        //NEM FELSO SOR
        if (!(this.#index < 3)) {
            this.#index = this.#index - 3;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
            } else {
                this.list[this.#index] = true;
            }
        }
        //NEM ALSO SOR
        if (!(this.#index > 5)) {
            this.#index = this.#index + 3;
            if (this.list[this.#index] == true) {
                this.list[this.#index] = false;
            } else {
                this.list[this.#index] = true;
            }
        }
    }

    countOffLights(list) {
        let db = 0
        for (let index = 0; index < this.list.length; index++) {
            if (this.list[index] == false) {
                db++;
            }
        }
    }

    getList() {
        return this.list;
    }

}