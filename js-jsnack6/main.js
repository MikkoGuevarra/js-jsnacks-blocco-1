//Stampa le potenze di 2 senza superare il numero 1000.

for (var i = 1; i < 20; i++) {
    // var potenza = Math.pow(2, i);
    var potenza = 2**i;
    if (potenza < 1000) {
        console.log("2 alla " + i + " " +potenza);
    }
}
