var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(len, bre) {
        this.length = len;
        this.breadth = bre;
    }
    Shape.prototype.Area = function () {
        console.log("Please perform the calculation part for the shape you defined");
    };
    Shape.prototype.Display = function (mes) {
        console.log("Area of " + mes + " is : " + this.area);
    };
    return Shape;
}());
var cube = /** @class */ (function (_super) {
    __extends(cube, _super);
    function cube(len, bre, width) {
        var _this = _super.call(this, len, bre) || this;
        _this.width = width;
        return _this;
    }
    cube.prototype.Area = function () {
        console.log("length " + this.length + " and breadth " + this.breadth + " and width " + this.width);
        this.area = this.length * this.breadth * this.width;
        this.Display("cube");
    };
    return cube;
}(Shape));
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(len, bre) {
        return _super.call(this, len, bre) || this;
    }
    return square;
}(Shape));
var cub = new cube(10, 20, 30);
cub.Area();
var sq = new square(10, 20);
sq.Area();
