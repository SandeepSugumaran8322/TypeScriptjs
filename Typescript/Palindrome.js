var actual1 = "amma";
var reversedString1 = "";
for (var i = actual1.length - 1; i >= 0; i--) {
    reversedString1 = reversedString1.concat(actual1.charAt(i));
}
console.log("Actual string: " + actual1 + "\nReversed String: " + reversedString1);
if (actual1 === reversedString1) {
    console.log("it is a palindrome");
}
else {
    console.log("it is not palindrome");
}
