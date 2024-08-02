window.onload = function () {
    let form = document.querySelector("form")
    form.addEventListener("submit", SUBMITT)
}

const SUBMITT = function (e) {
    e.preventDefault();
    crea();
}

function crea() {
    var contenitore = document.getElementById("contenitore"); //creo variabile per contenitore 
    var nuoviElementi = document.createElement("div");  //creo il div che contiene il testo creato
    var inputValue = document.querySelector('input[type="text"]').value;  //contenuto del div creato = ciò che inserisco nell input
    nuoviElementi.innerHTML = inputValue;  //definisco il testo ai div che si creano dall'input dato
    nuoviElementi.className = "stileElementi";   //aggiungo la classe ai div che si creano dall'input dato
    nuoviElementi.style.backgroundColor = "white";
    contenitore.appendChild(nuoviElementi);   //attacco il div creato dall input field al contenitore
    var nuovoPulsante = document.createElement("button");  //provo a crare il pulsante elimina per il testo creato
    nuovoPulsante.innerHTML = '<i class="far fa-trash-alt"></i>';
    nuovoPulsante.onclick = function () {
        contenitore.removeChild(nuoviElementi);
    };
    nuoviElementi.appendChild(nuovoPulsante)  //provo ad attaccare il pulsante creato al div (testo creato)
    sbarra()
}
function sbarra() {
    let classiSbarrate = document.querySelectorAll(".stileElementi");
    for (let i = 0; i < classiSbarrate.length; i++) {
        classiSbarrate[i].addEventListener("click", function () {
            this.classList.toggle("completato");
        });
    }
}

