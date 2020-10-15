// JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var prima_parola = prompt("Inserisci la prima parola");
var seconda_parola = prompt("Inserisci la seconda parola");

console.log(prima_parola);
console.log("la prima ha " + prima_parola.length + " lettere");
console.log(seconda_parola);
console.log("la seconda ha " + seconda_parola.length + " lettere");

if (prima_parola.length < seconda_parola.length) {
    console.log(prima_parola);
    console.log(seconda_parola);
} else {
    console.log(seconda_parola);
    console.log(prima_parola);
}
