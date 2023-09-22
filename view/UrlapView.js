class Urlap{
    
    #adat = {}
    #kulcsok = {};
    constructor(kulcsok, adat, szuloElem){
        this.#kulcsok = kulcsok;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form >");
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehoz();
        this.submitGomb = this.formElem.children("#submit");
        this.submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintasTrigger("ujAdatHozzaAdas");
        })
    }

    #adatGyujt(){
        for (const key in this.#adat) {
            this.#adat[key] = $(`#${key}`).val();
        }
    }

    #urlapLetrehoz(){
        let txt = "";
        for (const key in this.#adat) {
            txt += `<label for="${key}"   >${this.#kulcsok[key]}</label>`;
            if (this.#kulcsok[key] == "Tevékenység") {
                txt += `<input type="text" id="${key}" name="${key}" value="${this.#adat[key]}">`;
            } else if (this.#kulcsok[key] == "Határidő"){
                txt += `<input type="date" id="${key}" name="${key}" value="${this.#adat[key]}">`;
            } else if (this.#kulcsok[key] == "Állapot (true/false)"){
                txt += `<input type="text" id="${key}" name="${key}" value="${this.#adat[key]}">`;
            }
        }
        txt += `    <input type="submit" id="submit"  value="Hozzáad"><br><br>`;
        this.formElem.html(txt);
    }

    #kattintasTrigger(esemenynev){
        const ESEMENYEM = new CustomEvent(esemenynev, {
            detail: this.#adat
        });
        window.dispatchEvent(ESEMENYEM);
    }

} export default Urlap