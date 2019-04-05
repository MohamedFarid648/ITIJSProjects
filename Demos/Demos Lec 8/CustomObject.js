//Factory Pattern
/*
var employee = function (nm, age) {

	return {
		name: nm,
		age: age

	}


}
*/
var name = "Yasser"; //Global var
var showAll = function () {

	alert("I\'m " + this.name)

}

showAll();

var Employee = function (nm, age, yr = 1995) {
	var year = yr; //private
	this.name = nm;
	this.age = age;
	this.showEmpName = showAll
	this.getYear = function (x) {

		return year+x;
	}

	function innerFun() {



	}

};
var emp1 = new Employee("Ahmed", 27, 2007);
//emp1.showAll() //error
emp1.showEmpName();
var emp2 = new Employee("Kareem", 5, 2010);
console.log(emp2.age)
console.log(emp2.name)
console.log(emp2.getYear(10))
console.log(emp1.getYear(0))

console.log(emp1.constructor)


/*
var emp1 = employee("Ali", 10);
console.log(emp1.name);
console.log(emp1.age);
*/
