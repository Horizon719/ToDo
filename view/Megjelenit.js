import MegjelenitSor from "./MegjelenitSor.js";
import Urlap from "./UrlapView.js"

class Megjelenit {
    
    #lista=[]
    constructor(lista, szuloElem){
        this.#lista = lista;
        szuloElem.append(`<table class="table table-hover table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        
        this.megjelenit();
    }

    megjelenit(){
        
        this.#lista.forEach((element, index )=> {
            new MegjelenitSor(element, this.tablaElem, index)
        });
        
    }

    

} export default Megjelenit
