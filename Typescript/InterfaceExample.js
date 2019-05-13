var obj = {
    name: "abc",
    display: function () {
        console.log(this.name);
    }
};
console.log(obj.display());
console.log(obj.name);
