"use strict;"

var Employee = function (name = "abc", age = 9, salary = 9, yearBorn = 2000) {

	var year = yearBorn; // private member
	this.nameEmployee = name;
	this.ageEmployee = age;

	this.getyear = function () {
		return year;

	}

	var x = Employee.count++;


}

//static prop= class prop
Employee.count = 0;

//Class Method
Employee.getCount = function () {
	return Employee.count;
}
Employee.Ahmed = function () {



}

Employee.prototype.getAge = function () {

	return this.age;

}

//Override
Employee.prototype.toString = function () {

	return "this is employee " + this.name;
}









var emp = new Employee("ali", 10, 1000, 1990);

console.log(emp.count);
var x = 10;

var obj = {
	name: "object1",
	fun: function () {
		this.name = "mostafa";
		console.log(x);
		console.log(this.name);


	}

}


console.log(obj.fun());
console.log(obj.name);

obj.fun.call(emp) //ali
