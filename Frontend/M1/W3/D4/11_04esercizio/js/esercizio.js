/*
const generateMainBoard = function () {
    // funzione che crea il tabellone
}

const fillArray = function () {
    // inserire in un array
}

const getRandomNum = function () {
    // generare un numero random
}

const generateRandNumber = function () {
    // stampare il numero
    // associare la classe...
}

const generateUserBoards = function () {
    // genera e gestisce le tabelline
}
*/
window.onload = function () {
    generaTabella(); fillArray(); generateRandNumber(); btnCartelline()
}

const generaTabella = function () {
    let contenitore = document.getElementById("contenitore");
    const tabella = document.createElement("div");
    tabella.className = "numeriTabella";

    for (let i = 1; i <= 90; i++) {
        const numeriTombola = document.createElement("div");
        numeriTombola.textContent = i;
        tabella.appendChild(numeriTombola);
    }

    contenitore.appendChild(tabella);
}
const numeriEstratti = []
const fillArray = function () {
    for (let i = 1; i <= 90; i++) {
        numeriEstratti.push(i)
    }
}
const getRandomNum = function () {
    const indexEstratto = Math.floor(Math.random() * numeriEstratti.length);
    const numero = numeriEstratti.splice(indexEstratto, 1);

    const numGenerato = document.getElementById("numGenerato")
    numGenerato.innerHTML = "E' uscito il numero " + numero + "!"

    const numeriTabella = document.querySelectorAll(".numeriTabella div");
    const numeroEstratto = numeriTabella[numero - 1];
    numeroEstratto.classList.add("estratti")
    
    giocatore = document.querySelectorAll(".cartellinacl div");
    giocatore[numero - 1].classList.add("estratti")

}

const generateRandNumber = function () {
    document.getElementById("btnGeneraNum").addEventListener("click", getRandomNum)
}
const generaCartellina = function () {
    let contenitoreCartellina = document.getElementById("contenitore_cartellina")
    const cartellina = document.createElement("div")
    cartellina.className = "cartellinacl"
    contenitoreCartellina.appendChild(cartellina)
    for (let i = 1; i <= 24; i++) {
        const numeriCartellina = document.createElement("div");
        const numeroGiocatore = Math.floor(Math.random() * 90) + 1;
        numeriCartellina.textContent = numeroGiocatore
        cartellina.appendChild(numeriCartellina);
    }
}
const btnCartelline = function () {
    document.getElementById("btnCartelline").addEventListener("click", generaCartellina)

}