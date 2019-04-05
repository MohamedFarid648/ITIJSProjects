var Employee = function (nm, age) {
	this.name = nm;
	this.age = age;


}

var emp1 = new Employee("abc", 10);


Employee.prototype.getName = function () {

	return this.name;
}
Employee.prototype.getAge = function () {

	return this.age;
}

Employee.prototype.toString = function () {

	return "this is Employee " + this.name + " he is " + this.age + " years old..";

}

console.log("emp1 instanceof Object:"+ (emp1 instanceof Object));
console.log("emp1 instanceof Employee:"+(emp1 instanceof Employee));

console.log("emp1.getName():"+emp1.getName()) //abc
console.log("emp1.toString():"+emp1.toString()) //[]

emp1.cdfr=50;
console.log("emp1.cdfr:"+emp1.cdfr);

console.log("emp1.constructor==Object:"+(emp1.constructor==Object));
console.log("emp1.constructor==Employee:"+(emp1.constructor==Employee));