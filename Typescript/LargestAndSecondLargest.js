var numArray = [10, 2, 45, 6, 78, 2, 0, 1];
var fLargest = numArray[0];
var sLargest = numArray[0];
for (var index in numArray) {
    if ((numArray[index] > fLargest) && (fLargest >= sLargest)) {
        sLargest = fLargest;
        fLargest = numArray[index];
    }
    else if (numArray[index] > sLargest) {
        sLargest = numArray[index];
    }
}
console.log("First Largest: " + fLargest);
console.log("Second Largest: " + sLargest);
