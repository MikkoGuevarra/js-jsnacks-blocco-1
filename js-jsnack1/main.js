// JSnack 1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var first_number = parseInt(prompt("Inserisci il tuo numero"));
console.log(first_number);
var second_number = parseInt(prompt("Inserisci il tuo numero"));
console.log(second_number);

if (!isNaN(first_number) && !isNaN(second_number)) {
    if (first_number > second_number) {
        console.log("il primo è maggiore");
        document.getElementById('result').innerHTML = "il primo è maggiore";
    } else if ( first_number == second_number) {
        console.log("è pari");
        document.getElementById('result').innerHTML = "è pari";

    } else {
        console.log("il secondo è maggiore");
        document.getElementById('result').innerHTML = "il secondo è maggiore";
    }

}
else {
    console.log("inserisci un numero valido");
}
