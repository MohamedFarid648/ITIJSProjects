var myMap = new Map();
myMap.set("Mostafa", [{
	obj: "nm"
}, {
	prop: "abc"
}])


var arr = [1, 2, 3, 4, 5, 6]
/*
for (i in arr){
	
	console.log(arr[i]);
	
}
*/

for (i of arr) {

	console.log(i);

}


var obj = {
	name: "ali",
	age: 10,
	sal: 1000
}


for (prop in obj) {
	console.log(prop + ":" + obj[prop]);


}


obj[Symbol.iterator] = function () {



}



arr[Symbol.iterator]().next()


function* genFun() {
	console.log("start");
	yield "abc";
	console.log("yield 1 finished")
	yield* [1, 2, 3];
	yield 2;
	console.log("final");
	yield 3;


}

for (i of genFun()) {
	console.log(i)
}


//for (i of fun(arr)) {}



function* evenGen(...arr) {

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 0) {

			yield arr[i];
		}
	}


}









for (i of evenGen(1, 2, 4, 5, 7, 98, 100)) {
	console.log(i)

}









arr = [0, 1, 2, 3];

for (i of arr) console.log(i)









/*for (prop of obj) {
	console.log(prop + ":" + obj[prop]);
}*/
