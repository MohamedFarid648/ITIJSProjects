function fun1() {

	//hoist x

	console.log(x) //undef
		//console.log(i)//error

	var x = 10;




	for (let i = 0; i < 5; i++) {
		//let defines block scope
		console.log(i); //exec
		console.log(x) //exec
			//
			//
			//
			//
		const y = Math.PI;


	}

	console.log(i) //error


}


/////////

function closureFun() {
	var arr = [];
	//i
	console.log(i)
	for (var i = 0; i < 3; i++) {

		arr.push(function () {

			console.log(i);

		})

	}

	//i
	console.log(i)
	return arr;


}

closureFun()[0]
	///////////////////////////

//Arrow Function
//as callback function
// passing function as a paramenter to another function
(x, y) => {
	//
	//
	return

}

(x, y) => {
	y + 10
}







var obj = {

	name: "ali",
	age: 10,
	helloAll() {
		//console.log(this.name);
		//var abc=this;
		//self _self that _this 

		window.setTimeout(() => {
			console.log(this.name)

		}, 1000)

	}


}


var name = "ES6";


obj.helloAll(); //ALi  ES6



///Mostafa
var x = obj.helloAll;

window.x() //

///////////////////////
// ...rest Parameter

function fun1(a, b, c, ...arr) {
	
	
	
	console.log(arr);
	console.log(arr.join("__"));
	
	
}



func1(1, 2, 3, "abc", "xyz", "123", "456",100);



//..Spread Operator
function f(a,b,c,...x){
	
	var y=a+b+c;
	for(let i =0;i<x.length;i++){
		y+=x[i];
		
	}
	
	
	return y;
	
}


var arr=[1,2,3]

//f(arr[0],arr[1],arr[2])

var result=f(...arr,4,5)






































