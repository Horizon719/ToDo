
class MegjelenitSor{

    #obj={}
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.xElem = this.sorElem.children("td").children(".x");
        this.xElem.css("display", "none");
        this.trashElem = this.sorElem.children("td").children(".trash");
        
        $(this.keszElem).on("click", () =>{
            this.sorElem.css("background-color", "rgb(0, 206, 0)");
            this.keszElem.css("display", "none");
            this.xElem.css("display", "inline");
            this.#esemenyTrigger("kesz")
        })
        
        $(this.xElem).on("click", () =>{
            this.sorElem.css("background-color", "white");
            this.xElem.css("display", "none");
            this.keszElem.css("display", "inline");
        })

        $(this.trashElem).on("click", () =>{
            this.sorElem.remove();
        })
    }

    #sor(){
        let txt = `<tr>`; 
        for (let x in this.#obj) {
            txt+=`<td>${this.#obj[x]}</td>`;
        }
        txt+=`<td><i class="fa fa-check kesz"></i><i class="fa fa-remove x"></i></i><i class="fa fa-trash trash"></i></td><td></td></tr>`;
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this})

        window.dispatchEvent(esemenyem);
    }


} export default MegjelenitSor