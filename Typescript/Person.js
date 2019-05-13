var role;
(function (role) {
    role[role["ENGINEER"] = 0] = "ENGINEER";
    role[role["DOCTOR"] = 1] = "DOCTOR";
})(role || (role = {}));
var Person = /** @class */ (function () {
    function Person(data) {
        this.Persondata = data;
    }
    Person.prototype.Display = function () {
        console.log("id:" + this.Persondata.Id + " name:" + this.Persondata.name1 + " and role:" + role[this.Persondata.Role]);
    };
    return Person;
}());
var person1Data = {
    //name1:"sandeep",
    Id: 1,
    Role: role.DOCTOR
};
var person1 = new Person(person1Data);
person1.Display();
