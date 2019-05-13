var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 100] = "UP";
    Direction[Direction["DOWN"] = 101] = "DOWN";
    Direction[Direction["LEFT"] = 102] = "LEFT";
    Direction[Direction["RIGHT"] = 103] = "RIGHT";
})(Direction || (Direction = {}));
var direction;
direction = Direction.UP;
var direction1 = Direction.DOWN;
console.log(direction);
console.log(direction1);
