"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(n) {
        this.credito += n;
    }
    chiamata(minutiChiamata) {
        let costo = this.costoMinuto * minutiChiamata;
        this.credito -= costo;
        this.numeroChiamate += minutiChiamata;
    }
    get chiama404() {
        return "il credito reisduo è di: " + this.credito + "€";
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeranumeroChiamate() {
        this.numeroChiamate = 0;
    }
}
const user1 = new User("Mario", "Rossi");
console.log("credito pre-ricarica: " + user1.credito);
user1.ricarica(10);
user1.chiamata(5);
console.log(user1.chiama404);
