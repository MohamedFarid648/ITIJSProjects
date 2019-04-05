//document.write("<br/>statemnet from <u>external file</u>");
//console.log(data);//error
console.log(data);
var data = myFun(0)
console.log(data);

function myFun(x,y=20) {
	var w = x || 10;
	var v = y;
	var z = w + v;
	childFun();
	h = 300;

	function childFun() {
		var a = "str";
		console.log("childfun executed" + z + " " + num1 + " " + a + " ");
	}


	return z;


}
var num1 = 10;
console.log(h);
/*
var num1 = parseInt(prompt("enter 1st value", "10"));
var num2 = parseInt(prompt("enter 2nd value", "20"));

var result = myFun(num1, num2)

console.log(result);
*/
