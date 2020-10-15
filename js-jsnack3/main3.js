//creo una variabile contatore che parte da 0
var sum = 0;
// //Il software deve chiedere per 5 volte all'utente di inserire  un numero
for (var i = 0; i < 5; i++) {
    var inserted = parseInt(prompt("insert a number" + (i + 1)));
        //per ogni numero inserito a sum viene aggiunto il numero inserito
        sum = sum + inserted;
        console.log("il " + (i + 1) + " inserito è " + inserted);
}

console.log("the final sum of numbers = " + sum);
