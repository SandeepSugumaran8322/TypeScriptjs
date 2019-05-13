var bankname;
(function (bankname) {
    bankname[bankname["HDFC"] = 0] = "HDFC";
    bankname[bankname["ICICI"] = 1] = "ICICI";
    bankname[bankname["INDIAN"] = 2] = "INDIAN";
})(bankname || (bankname = {}));
var branch;
(function (branch) {
    branch[branch["DOMLUR"] = 0] = "DOMLUR";
    branch[branch["EJIPURA"] = 1] = "EJIPURA";
    branch[branch["KORAMANGALA"] = 2] = "KORAMANGALA";
})(branch || (branch = {}));
var Bank = /** @class */ (function () {
    function Bank(custData, customerReqBank) {
        this.custData = custData;
        this.customerReqBank = customerReqBank;
    }
    Bank.prototype.createAccountRequest = function () {
        Bank.accdigit++;
        //let accountNumber:string=Bank.accdigit+branch[this.customerReqBank.name-1];
        console.log(this.customerReqBank.name);
        console.log(this.custData);
        console.log(this.customerReqBank);
    };
    Bank.prototype.Display = function () {
        console.log("bankDetails:" + this.customerReqBank);
    };
    Bank.accdigit = 100;
    return Bank;
}());
var customer = /** @class */ (function () {
    function customer(customerData, customerReqBank) {
        this.customerData = customerData;
        this.customerReqBank = customerReqBank;
    }
    customer.prototype.createAccount = function () {
        var acc = new Bank(this.customerData, this.customerReqBank);
        acc.createAccountRequest();
    };
    customer.prototype.Display = function () {
        console.log("bankDetails:" + this.customerData.name);
        console.log("bankDetails:" + this.customerData.Address.city);
    };
    return customer;
}());
var customername = {
    name: "sandeep",
    Address: {
        flatno: 10,
        street: "20th h cross",
        locality: "ejipura",
        city: "bangalore"
    }
};
var customername2 = {
    name: "sugumaran",
    Address: {
        flatno: 10,
        street: "20th h cross",
        locality: "ejipura",
        city: "bangalore"
    }
};
var bankRequired = {
    name: bankname.HDFC,
    branch: branch.DOMLUR,
    Address: {
        flatno: 20,
        street: "airport road",
        locality: "Domlur",
        city: "bangalore"
    }
};
var bankRequired2 = {
    name: bankname.ICICI,
    branch: branch.DOMLUR,
    Address: {
        flatno: 30,
        street: "airport road",
        locality: "Domlur",
        city: "bangalore"
    }
};
var cust1 = new customer(customername, bankRequired);
var cust2 = new customer(customername2, bankRequired2);
cust1.createAccount();
cust2.createAccount();
