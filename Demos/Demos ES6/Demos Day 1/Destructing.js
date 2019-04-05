var arr = [1, 2, 3, 4, 5, 6];


var x = arr[0];
y = arr[3];


var [x, , , y] = arr;


var obj = {
	name: "ABC",
	age: 12,
	salary: 1000
}

var {
	name, salary, a
} = obj

console.log(name);
console.log(salary);
console.log(a);


///////////////////
client = {
	name: "Ali",
	comapny: "XYZ"
}

var userGreeting = function (msg = "hii", obj = {
	title: "Eng.",
	name: "nour",
	dept: "SD"
}) {





	return msg + " " + obj.title + " " + obj.name + " in Dept" + obj.dept

}


console.log(userGreeting("hello", "client"));

/////////////////////
var client = {
	name: "Ali",
	company: "XYZ",
	age: 10
}

var userGreeting = function (msg, obj) {

	var defaultObj = {
		title: "Eng.",
		name: "nour",
		dept: "SD"
	}


	console.log(defaultObj);
	
	var settings = Object.assign(defaultObj, obj)

	console.log(defaultObj);


	//return msg + " " + settings.title + " " + settings.name + " in Dept" + settings.dept
	
	return `${msg} ${settings.title} ${settings.name} `
	
	

}


console.log(userGreeting("hello", client));
