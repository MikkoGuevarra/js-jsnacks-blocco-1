//crea un array vuoto
var numberContainer = [];

//chiedi per 6 volte di inserire un numero
for (var i = 0; i < 6; i++) {
    var insertedNumber = parseInt(prompt("inserisci un numero"));
    if (!isNaN(insertedNumber)) {
        console.log("il " + (i+1) + " numero è " + insertedNumber);
        if (insertedNumber % 2 !=0) {
            numberContainer.push(insertedNumber);
        }
    } else {
        console.log("Inserisci un numero valido");
    }


    //se è dispari inseriscilo nell'array


}

console.log(numberContainer);
