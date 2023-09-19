class Urlap{
    
    #adat = {}
    constructor(adat, szuloElem){
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form >");
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehoz();
        this.submitGomb = this.formElem.children("div").children("#submit");
        this.submitGomb.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintasTTrigger("ujAdatHozzaAdas");
        })
    }

    #adatGyujt(){
        for (const egyAdat in this.#adat) {
            this.#adat[egyAdat] = $(`#${egyAdat}`).val();
        }
    }

    #urlapLetrehoz(){
        this.szuloElem.append(`<form>
                                <input type="text" placeholder="tevékenység" name="tevekenyseg">
                                <input type="date" name="hatarido">
                                <input type="submit" id="submit" name="mehet">
                                </form>`);
    }

    #kattintasTTrigger(esemenynev){
        const ESEMENYEM = new CustomEvent(esemenynev, {
            detail: this.#adat
        });
        window.dispatchEvent(ESEMENYEM);
    }

} export default Urlap