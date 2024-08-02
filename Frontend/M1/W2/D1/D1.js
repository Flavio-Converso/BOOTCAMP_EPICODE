/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 RISPOSTA:
 I datatype di javascript sono di tipo primitivo e complesso. Il primo tipo si divide in 5 tipi di dati:
 -numeri: sono dati di tipo numerico e scritti senza racchiuderli in apici (singoli o doppi). Sono considerati numeri tutti i dati numerici:interi, decimali, negativi; per i
 numeri decimali utilizziamo il . (es. 1.3 ; 0.4 ecc.), per i numeri negativi utilizziamo il meno (es. -3; -4; -10 ecc.). Esiste un valore speciale chiamato NaN(not a number) che 
 indica un valore non definito;
 -stringhe: sono dati racchiusi nelle apici doppie o singole (aprendo con la singola apice dovrò chiudere con la singola apice, aprendo con la 
  doppia apice dovrò chiudere con la doppia apice, possono essere anche inseriti "uno dentro l'altro") (es. "ciao"; 'ciao'; '32' ; "questo è 'dentro' " ). Esiste anche
  la stringa vuota ( "" ). Per inserire un carattere speciale all'interno della stringa dovrò usare \ succeduto dal carattere che voglio utilizzare (es. 'l\'orario');
  -valori booleani: ci sono 2 possibili valori assegnabili che sono true e false. (es. 1>2 = false; 2>1 = true ecc.);
  -null: prevede un valore -> null, è diverso da 0 o da una stringa vuota;
  -undefined: prevede un valore -> undefined e presuppone un valore inesistente (diverso da 0, stringa vuota o null) (es. var pippo -> è undefined, posso assegnargli poi un valore).
  I datatype complessi invece sono un insieme di dati complessi definiti oggetti a cui possiamo assegnare delle proprietà (es. coppie attributo-valore) o delle funzioni con istruzioni.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.*/
//RISPOSTA:
var myName = "Flavio";
console.log (myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. */
//RISPOSTA:
var x = 12;
var y = 20;
console.log (x + y);
//oppure
var z = x + 20;
console.log(z);
//oppure
var n = y + 12;
console.log(n);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/
//RISPOSTA:
 var x = 12;
console.log (x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.*/
//RISPOSTA:
var myName = "Converso";
console.log (myName);
const nome = "Pippo";
// var nome = "Peppe";   
//oppure const nome = "Peppe";      
console.log (nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/
//RISPOSTA:
var hS = 4;
var sottr = hS - x ;
console.log(sottr);
//oppure
4-x;
console.log(4-x);
//oppure
var risultato_sottr = 4-x;
console.log (risultato_sottr);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).*/
//RISPOSTA:
var name1 = "john";
var name2 = "John";
console.log (name1==name2);
console.log (name1==name2.toLowerCase());
/*oppure
console.log(name1!==name2) 
console.log(name1!==name2.toLowerCase())*/
