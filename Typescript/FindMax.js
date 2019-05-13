var array1 = [-1, -10, -30, -1, -3, -8, -37];
var array2 = [-1, -10, -30, -1, -3, -8, -37];
var max;
max = array1[0];
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var val = array1_1[_i];
    if (val > max) {
        max = val;
    }
}
console.log("Max value:" + max);
//sorting the numbers 
function compare(v1, v2) {
    if (v1 > v2)
        return 1;
    return -1;
}
array1.sort(compare);
console.log(array1);
//other way of passing function as paramter
array2.sort(function comp(v3, v4) {
    return v3 > v4 ? 1 : -1;
});
console.log(array2);
