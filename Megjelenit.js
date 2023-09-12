import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
    
    #lista=[]
    constructor(lista, szuloElem){
        this.#lista = lista;
        szuloElem.append(`<table class="table table-hover table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.megjelenit();
    }

    megjelenit(){
        
        this.#lista.forEach(element => {
            new MegjelenitSor(element, this.tablaElem)
        });
        
    }

    

} export default Megjelenit
