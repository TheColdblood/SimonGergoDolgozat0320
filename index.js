import { RETROAUTOK } from "./adatok.js";
import { feladat1 } from "./fuggvenyek.js";

const autokELEM = document.querySelector(".tartalom");
autokELEM.innerHTML = feladat1(RETROAUTOK);


const gombELEM = document.querySelectorAll(".autok img");
for (let index = 0; index < RETROAUTOK.length; index++) {
    gombELEM[index].addEventListener("click", function(){const kepELEM = document.querySelectorAll(".kivalasztott")
    kepELEM[0].innerHTML = `<li>${RETROAUTOK[index].nev}</li>` })
}

