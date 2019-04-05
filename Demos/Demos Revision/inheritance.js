var Person = function (name, age, addr) {

	this.name = name;
	this.age = age;
	this.addr = addr;
	if (this.constructor == Person)//4
		throw " cant create object";


}


Person.prototype.getAddr = function () {
	return this.addr;
}

//var age, name, addr

var Employee = function (name, age, addr, salary) {

	Person.call(this, name, age, addr);//1

	this.salary = salary;


}


Employee.prototype = Object.create(Person.prototype);//2

Employee.prototype.getSalary = function () {
	return this.salary;

}


Employee.prototype.constructor = Employee;//3


var e = new Employee("ahmed", 10, "abc st.", 1000);
var e2 = new Employee("kareem", 5, "smartVillage", 100);

var p = new Person();//error
