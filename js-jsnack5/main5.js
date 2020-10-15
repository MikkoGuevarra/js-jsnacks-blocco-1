//stampa il cubo dei N numeri, dove N è un numero indicato dall'utente
//chiedo il numero
var userChoice = parseInt(prompt("Inserisci il numero che vuoi che trasformi al cubo"));
// console.log(userChoice);
//inizio ciclo for per fare il cubo di N numeri
for (var i = 0; i <= userChoice; i++) {
    var cubo = Math.pow(i + 1, 3);
    console.log(cubo);
}
