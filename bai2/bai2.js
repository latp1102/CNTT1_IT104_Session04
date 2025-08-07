var scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var total = 0;
for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
var avg = total / scores.length;
console.log(avg.toFixed(2));
