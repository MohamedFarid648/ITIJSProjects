//function statement

//function Expression
//var fun = function /*myFun*/ (a) {
/*
if(a==0)
	myFun(10);
	*/
/*
console.log(x);
var x = 10;
var y = a;
return x + y;

}*/

/*
//litral notation of function creation
var x = function () {}

console.log(fun());




//fun()
//console.log(fun);
var fun = function (a) {
	var x = 10;
	var y = a;
	return x + y;

}




//console.log(myFun(1));//11

var val = fun(1);
console.log(val);
console.log(fun(1)); //11

var arr = [1, 2, 3, 4, function () {
	console.log("fun in an array");
}];
*/
/*
arr[4]()
var y=arr[4];
y()
*/
/*
//anonymous Data
10 + 5
"abc"

//callback Function

setTimeout(function () {

	console.log("setTimeout");
}, 1000);
*/


/*
//return function from another function

var myFun = function () {
	//
	//
	//
	//

	return function () {
		//
		//
		//
		console.log("return function from another");



	}

}


var newFun = myFun() //return to a function
console.log(newFun); //function

newFun() //

myFun()

*/

var obj2={
	name:"abc",
	age:10,
	greeting:function(){}
	
	
}
var obj3={
	name:"abc",

	greeting:function(){}
	
	
}
var obj = {}; //litral notation

obj.name = "javascript";
obj["ahmed"] = "webTech";
obj.age = 10;
obj.getAge = function () {

	return obj.age;
}

//getAge();


obj.getAge()//undefined

obj.greeting = function (param) {

	return param + " " + this.name;
}

var nm = obj["name"];
var type = obj.ahmed;

console.log(obj.greeting("hiii... "));

console.log(obj.name);
console.log(nm);
