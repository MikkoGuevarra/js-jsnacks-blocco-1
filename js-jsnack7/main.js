// Calcola la somma e la media dei numeri da 1 a 10.
totSum = 0
for (var i = 0; i < 10; i++) {
    totSum = i + 1 + totSum;
    // totSum += i + 1;
}
console.log("la somma è " + totSum);

media = totSum / 10;

console.log("la media è " + media);
