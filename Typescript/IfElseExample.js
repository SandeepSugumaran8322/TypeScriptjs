var age = 50;
if (age < 50) {
    console.log("less than 50");
}
else if ((age >= 50) && (age <= 70)) {
    console.log("between 50 to70");
}
else {
    console.log("greater than 70");
}
//Switch case:
var direct = 0;
switch (direct) {
    case 0:
        console.log("going up");
        break;
    default:
        console.log("Nothing...");
}
var DirectionA;
(function (DirectionA) {
    DirectionA[DirectionA["UP"] = 0] = "UP";
    DirectionA[DirectionA["DOWN"] = 1] = "DOWN";
    DirectionA[DirectionA["LEFT"] = 2] = "LEFT";
    DirectionA[DirectionA["RIGHT"] = 3] = "RIGHT";
})(DirectionA || (DirectionA = {}));
var directi = 0;
switch (directi) {
    case DirectionA.UP:
        console.log("going up");
        break;
    default:
        console.log("Nothing...");
}
