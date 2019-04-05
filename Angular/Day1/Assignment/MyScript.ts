
console.log("Hello world");

class Customer {


    public customerID: number;
    public customerName: string;
    public customerSalary: number;
}
interface IAccount {

    dateOfOpen: Date,
    MyCustomers: Array<Customer>;
    addCustomer(_customer: Customer);
    removeCustomer(id: number);

}

abstract class Account {
    public balance;
    constructor(public accountNum: number, bl: number) {

        this.balance = bl;

    }
    
}
class Saving extends Account implements IAccount {
    dateOfOpen: Date;
    MyCustomers: Array<Customer>;

    constructor(dop: Date, accNum: number, bl: number, public minBalance: number) {
        super(accNum, bl);
        this.dateOfOpen = dop;
        this.MyCustomers = [];

    }

    addCustomer(_customer: Customer) {
        this.MyCustomers.push(_customer);
        //{customerID:1,customerName:"Ahmed",customerSalary:1000}
        console.log("Add New customer");
    }

    removeCustomer(id: number) {
        delete this.MyCustomers[id];

    }
}

class Current extends Account implements IAccount {

    dateOfOpen: Date;
    MyCustomers: Array<Customer>;
    constructor(dop: Date, accNum: number, bl: number, public interestRate: number) {
        super(accNum, bl);
        this.MyCustomers = [];
        this.dateOfOpen = dop;

    }

    addCustomer(_customer: Customer) {
        this.MyCustomers.push(_customer);
        //{customerID:1,customerName:"Ahmed",customerSalary:1000}
        console.log("Add New customer");
    }

    removeCustomer(id: number) {
        delete this.MyCustomers[id];
    }




}




var MyAcc2 = new Current(new Date(), 2, 5000, 0);
MyAcc2.addCustomer({ customerID: 1, customerName: "Mostafa", customerSalary: 1000 });
MyAcc2.addCustomer({ customerID: 2, customerName: "Hussien", customerSalary: 2000 });
MyAcc2.addCustomer({ customerID: 3, customerName: "Emad", customerSalary: 3000 });


var MyAcc1 = new Saving(new Date(), 1, 5000, 1000);
MyAcc1.addCustomer({ customerID: 1, customerName: "Ahmed", customerSalary: 1000 });
MyAcc1.addCustomer({ customerID: 2, customerName: "Ali", customerSalary: 2000 });
MyAcc1.addCustomer({ customerID: 3, customerName: "Mohamed", customerSalary: 3000 });



