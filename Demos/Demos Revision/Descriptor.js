var Employee = function (nm,age) {
	var obj = {}

	Object.defineProperties(obj,{
		name:{},
		age:{}
		
	})
	
	Object.defineProperty(obj, "name", {
		//Data Descriptor
		writable: false,
		value: nm //,

		//configurable: ,
		//enumrable:
	});

	Object.defineProperty(obj, "age", {
		//Accessor Descriptor
		get: function () {
			return age
		},
		set: function (val) {
			age = val;
		}

		//configurable: ,
		//enumrable:

	})






	return obj;


}



var e = Employee("ALI");

e.name = "abc"
e.age=10