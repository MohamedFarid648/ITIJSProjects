var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello world");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var Account = /** @class */ (function () {
    function Account(accountNum, bl) {
        this.accountNum = accountNum;
        this.balance = bl;
    }
    return Account;
}());
var Saving = /** @class */ (function (_super) {
    __extends(Saving, _super);
    function Saving(dop, accNum, bl, minBalance) {
        var _this = _super.call(this, accNum, bl) || this;
        _this.minBalance = minBalance;
        _this.dateOfOpen = dop;
        _this.MyCustomers = [];
        return _this;
    }
    Saving.prototype.addCustomer = function (_customer) {
        this.MyCustomers.push(_customer);
        //{customerID:1,customerName:"Ahmed",customerSalary:1000}
        console.log("Add New customer");
    };
    Saving.prototype.removeCustomer = function (id) {
        delete this.MyCustomers[id];
    };
    return Saving;
}(Account));
var Current = /** @class */ (function (_super) {
    __extends(Current, _super);
    function Current(dop, accNum, bl, interestRate) {
        var _this = _super.call(this, accNum, bl) || this;
        _this.interestRate = interestRate;
        _this.MyCustomers = [];
        _this.dateOfOpen = dop;
        return _this;
    }
    Current.prototype.addCustomer = function (_customer) {
        this.MyCustomers.push(_customer);
        //{customerID:1,customerName:"Ahmed",customerSalary:1000}
        console.log("Add New customer");
    };
    Current.prototype.removeCustomer = function (id) {
        delete this.MyCustomers[id];
    };
    return Current;
}(Account));
var MyAcc2 = new Current(new Date(), 2, 5000, 0);
MyAcc2.addCustomer({ customerID: 1, customerName: "Mostafa", customerSalary: 1000 });
MyAcc2.addCustomer({ customerID: 2, customerName: "Hussien", customerSalary: 2000 });
MyAcc2.addCustomer({ customerID: 3, customerName: "Emad", customerSalary: 3000 });
var MyAcc1 = new Saving(new Date(), 1, 5000, 1000);
MyAcc1.addCustomer({ customerID: 1, customerName: "Ahmed", customerSalary: 1000 });
MyAcc1.addCustomer({ customerID: 2, customerName: "Ali", customerSalary: 2000 });
MyAcc1.addCustomer({ customerID: 3, customerName: "Mohamed", customerSalary: 3000 });
