export function feladat1(lista){
    let txt=""
    for (let index = 0; index < lista.length; index++) {
       txt+=`
            <div class = autok>
                <div class="kep"><img src='${lista[index].kep}' alt='${lista[index].nev}'></div>
                <h3>${lista[index].nev}</h3>
                <p>Évjárat: ${lista[index].evjarat}</p>
                <p>Ár: ${lista[index].ar}</p>
            </div>
            `
    }
    return txt
};

