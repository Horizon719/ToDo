
import Megjelenit from "./Megjelenit.js";
import { TODOLIST } from "./adatok.js";

$(function () {
    let szuloElem = $(`.tarolo`);
    new Megjelenit(TODOLIST, szuloElem);
});
