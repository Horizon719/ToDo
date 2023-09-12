
import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
    let szuloElem = $(`.tarolo`);
    new Megjelenit(TODOLIST2, szuloElem);

    $(window).on("kesz", function(event){
        console.log(event.detail);
    })
});
