var getterSetter = /** @class */ (function () {
    function getterSetter() {
    }
    Object.defineProperty(getterSetter.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fname) {
            if (fname != "") {
                this._fullName = fname;
            }
        },
        enumerable: true,
        configurable: true
    });
    return getterSetter;
}());
var gs = new getterSetter();
gs.fullName = "sandeep";
console.log(gs.fullName);
