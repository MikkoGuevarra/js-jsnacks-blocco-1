//stampa il cubo dei N numeri, dove N è un numero indicato dall'utente

var userChoice = parseInt(prompt("Inserisci il numero che vuoi che trasformi al cubo"));

var numeroCubo = userChoice * userChoice * userChoice;

console.log("il cubo di " + userChoice + " è " + numeroCubo);
