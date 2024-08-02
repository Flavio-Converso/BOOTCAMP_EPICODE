/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log("Esercizio A", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("Esercizio B", random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = { name: "Flavio", surname: "Converso", age: "23" };
console.log("ESERCIZIO C", me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("Esecizio D", me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"];
console.log("Esercizio E", me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Javascript");
console.log("Esercizio F", me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("Esercizio G ", me);
// Funzioni

console.log("FUNZIONI");
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}
console.log("Esercizio 1", dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let biggerNumber = whoIsBigger(1, 4);
console.log("Esercizio 2", biggerNumber);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa = "Questa è una stringa") {
  let arrayStringhe = stringa.split(" ");
  console.log("Esercizio 3", arrayStringhe);
}
splitMe();

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, valBooleano) {
  if (valBooleano === true) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}
console.log("Esercizio 4");
console.log(deleteOne("Questa è una stringa", true));
console.log(deleteOne("Questa è una stringa", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

*/
function onlyLetters(stringa) {
  return stringa.replace(/[0-9]/g, "");
}
console.log("Esercizio 5", onlyLetters("I have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
//per me è valida se c'è una @ e un .
function isThisAnEmail(stringa) {
  return stringa.includes("@") && stringa.includes(".");
}
console.log("Esercizio 6");
console.log(isThisAnEmail("esempio@qualcosa.com"));
console.log(isThisAnEmail("esempio.qualcosa.com"));
console.log(isThisAnEmail("esempio@qualcosa@com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      return "Domenica";
    case 1:
      return "Lunedi";
    case 2:
      return "Martedi";
    case 3:
      return "Mercoledi";
    case 4:
      return "Giovedi";
    case 5:
      return "Venerdi";
    case 6:
      return "Sabato";
  }
}
console.log("Esercizio 7", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numero) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < numero; i++) {
    let numeroUscito = dice();
    sum += numeroUscito;
    values.push(numeroUscito);
  }
  return {
    sum: sum,
    values: values,
  };
}
console.log("Esercizio 8", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
  let date = new Date(data);
  let oggi = new Date();
  let diff = oggi - date;
  return Math.floor(diff / (1000 * 60 * 60 * 24)); //1000(ovvero un secondo) x 60 è 1 minuto poi x60 è 1 ora poi x24 è 1 giorno
}

console.log("Esercizio 9", howManyDays("2024-03-12"));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(data) {
  let compleanno = new Date(data);
  let birthdayDay = compleanno.getDate();
  let birthdayMonth = compleanno.getMonth();

  let giorno = new Date();
  let oggi = giorno.getDate();
  let mese = giorno.getMonth();

  return birthdayDay === oggi && birthdayMonth === mese;
}

console.log("Esercizio 10", isTodayMyBirthday("2024-08-18"));

// Arrays & Oggetti
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const oggetto = { nome: "Flavio", cognome: "Converso", sesso: "maschio" };
const daTogliere = "sesso";

function deleteProp(oggetto, daTogliere) {
  delete oggetto[daTogliere];
  return oggetto;
}
console.log("Esercizio 11", deleteProp(oggetto, daTogliere));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function piuRecente() {
  let filmNuovo = movies[0];
  for (let i = 1; i < movies.length; i++) {
    let filmCorrente = movies[i];
    if (parseInt(filmCorrente.Year) > parseInt(filmNuovo.Year)) {
      filmNuovo = filmCorrente;
    }
  }
  return filmNuovo;
}
console.log("Esercizio 12->", piuRecente(movies).Title + " è il più recente");
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  let quantiFilm = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      quantiFilm++;
    }
  }
  return quantiFilm;
}
console.log("Esercizio 13", "I film sono " + countMovies() + " in totale");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  let years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year);
  }
  return years;
}
console.log("Esercizio 14", onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let filmInLastMillenium = [];
  for (let i = 0; i < movies.length; i++) {
    let year = movies[i].Year;

    if (year.charAt(0) === "2") {
      filmInLastMillenium.push(movies[i]);
    }
  }
  return filmInLastMillenium;
}
console.log("Esercizio 15:", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let totalYears = 0;
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    totalYears = totalYears + year;
  }
  return totalYears;
}
console.log("Esercizio 16", sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(stringa) {
  let filmCercato = [];
  for (let i = 0; i < movies.length; i++) {
    let film = movies[i].Title;
    if (film.toLowerCase().includes(stringa.toLowerCase())) {
      filmCercato.push(movies[i]);
    }
  }
  return filmCercato;
}
console.log("Esercizio 17", searchByTitle("war"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(stringa) {
  let match = [];
  let unmatch = [];

  for (let i = 0; i < movies.length; i++) {
    let film = movies[i].Title;
    if (film.toLowerCase().includes(stringa.toLowerCase())) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  return { match, unmatch };
}
console.log("Esercizio 18", searchAndDivide("war"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index) {
  movies.splice(index, 1);
  return movies;
}
console.log("Esercizio 19:", removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function container() {
  return document.getElementById("container");
}
container();
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function td() {
  return document.querySelectorAll("td");
}
td();
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampatd() {
  let tdMiei = document.querySelectorAll("td");
  for (let i = 0; i < tdMiei.length; i++) {
    console.log(tdMiei[i]);
  }
}
stampatd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function coloreRosso() {
  let linkRossi = document.querySelectorAll("a");
  for (let i = 0; i < linkRossi.length; i++) {
    linkRossi[i].style.backgroundColor = "red";
  }
}
coloreRosso();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiLi() {
  let ul = document.getElementById("myList");
  let li = document.createElement("li");
  // ul.appendChild(li);
}
aggiungiLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  let li = document.querySelectorAll("#myList li");
  for (let i = 0; i < li.length; i++) {
    li[i].remove();
  }
}
svuotaLista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClasse() {
  let tr = document.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
}
aggiungiClasse();
// [EXTRA] JS Avanzato
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
*/
function halfTree() {
  for (let i = 1; i <= 3; i++) {
    let riga = "";
    for (let j = 1; j <= i; j++) {
      riga = riga + "*";
    }
    console.log(riga);
  }
}
halfTree();

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
*/
function tree() {
  for (let i = 1; i <= 3; i++) {
    let spazi = " ".repeat(3 - i);
    let star = "*".repeat(2 * i - 1);
    console.log(spazi + star);
  }
}
tree();
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function primo() {
  let numero = 11;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primo());
