
class Megjelenit {
    
    #lista=[]
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;

        this.megjelenit();
    }

    megjelenit(){
        let txt = `<table class="table table-hover">`;
       
        this.#lista.forEach(element => {
            txt+=`<tr><td>${element}</td></tr>`;
        });
        txt+='</table>';
        this.szuloElem.html(txt);
    }

} export default Megjelenit
