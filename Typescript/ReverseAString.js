var actual = "sandeep";
var reversedString = "";
var len = actual.length;
for (var i = actual.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(actual.charAt(i));
}
console.log("Actual string: " + actual + "\nReversed String: " + reversedString);
