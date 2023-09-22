import Model from "../model/Model.js";
import Megjelenit from "../view/Megjelenit.js";
import { TODOLIST2 } from "../model/adatok.js";
import Urlap from "../view/UrlapView.js";

class Controller{
    constructor(){
        let szuloElem = $(`.tarolo`);
        let ujElem = $(`.ujadat`);
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), szuloElem);
        new Urlap({
            tevekenyseg: "Tevékenység",
            hatarido: "Határidő",
            kesz: "Állapot (true/false)",
        },
        {
            tevekenyseg: "",
            hatarido: "",
            kesz: false,
        }, ujElem)

        $(window).on("torol", function(event){
            console.log(event.detail);
            MODEL.torol(event.detail);
            szuloElem.empty();
            new Megjelenit(MODEL.getList(), szuloElem);
        })

        $(window).on("kesz", function(event){
            MODEL.kesz(event.detail);
            szuloElem.empty();
            new Megjelenit(MODEL.getList(), szuloElem);
        })

        $(window).on("megse", function(event){
            MODEL.megse(event.detail);
            szuloElem.empty();
            new Megjelenit(MODEL.getList(), szuloElem);
        })

        $(window).on("ujAdatHozzaAdas", function(event){
            MODEL.ujAdatHozzaAdas(event.detail);
            szuloElem.empty();
            new Megjelenit(TODOLIST2, szuloElem);
        })
    }
} export default Controller