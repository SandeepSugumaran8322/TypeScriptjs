var array = [-1, -1, 1, 0, 0, -2, -1];
var largestNum = array[0];
var smallestNum = array[0];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    if (val > largestNum) {
        largestNum = val;
    }
    else if (val < smallestNum) {
        smallestNum = val;
    }
}
console.log("largest value :" + largestNum);
console.log("smallest value :" + smallestNum);
