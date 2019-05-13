var Person1 = /** @class */ (function () {
    function Person1() {
        this.count = 0;
        this.count++;
    }
    Person1.prototype.getPersonCount = function () {
        return this.count;
    };
    return Person1;
}());
var per1 = new Person1();
console.log(per1.getPersonCount());
var per2 = new Person1();
console.log(per2.getPersonCount());
