interface iSmartPhone {
  credito: number;
  numeroChiamate: number;
}

class User implements iSmartPhone {
  credito: number = 0;
  numeroChiamate: number = 0;
  costoMinuto: number = 0.2;
  nome: string;
  cognome: string;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }
  ricarica(n: number) {
    this.credito += n;
  }
  chiamata(minutiChiamata: number) {
    let costo = this.costoMinuto * minutiChiamata;
    this.credito -= costo;
    this.numeroChiamate += minutiChiamata;
  }
  get chiama404(): string {
    return "il credito reisduo è di: " + this.credito + "€";
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  azzeranumeroChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const user1 = new User("Mario", "Rossi");
console.log("credito pre-ricarica: " + user1.credito);

user1.ricarica(10);
user1.chiamata(5);

console.log(user1.chiama404);
