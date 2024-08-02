/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 4;
let num2 = 5;
if (num1 > num2) {
  console.log("il primo è maggiore");
} else {
  console.log("il secondo è maggiore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 3;
if (num !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numm = 13;
if (numm % 5 == 0) {
  console.log("divisibile");
} else {
  console.log("non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numm1 = 12;
let numm2 = 4;
if ((numm1 == 8) || (numm2 == 8) || (numm1 + numm2 == 8) || (numm1 - numm2 == 8) || (numm2 - numm1 == 8)) {
  console.log("conferma")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
var totalShoppingCart = 49;
const spedizione = 10;
if (totalShoppingCart<50) {
totalShoppingCart + spedizione;
console.log(totalShoppingCart+spedizione);
} else{
  console.log(totalShoppingCart);
}                                                          */



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30;
const spedizione = 10;
let totscontato = totalShoppingCart - (totalShoppingCart * 20 / 100);
if (totalShoppingCart < 50) {
  console.log(totscontato + spedizione)
} else { console.log(totscontato) }




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
let y = 20;
let z = 30;
if (x < y && y < z) { console.log(x, y, z) }
else if (x < z && y > z) { console.log(x, z, y) }
else if (x > y && y > z) { console.log(z, y, x) }
else if (x > z && y > x) { console.log(z, x, y) }
else if (y < z && z > x) { console.log(y, z, x) }
else if (y < x && z > x) { console.log(y, x, z) }
else {};
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const bla = 1
if (typeof bla === "number" ){console.log(bla + " è un numero")
} else{
  console.log(bla + " non è un numero")
}
  

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let questo = 4;
if (questo % 2 == 0) {
  console.log(questo + " è pari");
} else { console.log(questo + " è dispari"); }
/*oppure 
if (questo%2==1)
{console.log(questo + " è pari")
}else { console.log(questo + " è dispari")}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 5
if ((val < 10) && (val > 5)) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
};

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}; me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
  let blabla = [];
  blabla.push (1,2,3,4,5,6,7,8,9,10);
console.log(blabla);
//oppure blabla.push (1); blabla.push(2) ecc.

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
blabla[9] = 100;
console.log(blabla)