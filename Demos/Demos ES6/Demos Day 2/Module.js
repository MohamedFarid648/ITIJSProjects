/*
var x = 10;

export const PI = Math.PI;//

export function fun(a, b) {//

	return sum(a,b)

}

function sum(a,b){
	
	return a + b + x;
	
}
*/


//Default Export
function sum(a, b) {

	return a + b + x;

}

var x = 10;

export default class myClass {

	constructor(p) {
		//constructor overloading
		this._prop = p;

	}


	get prop() {
		return this._prop;
	}
	fun(a, b) { //

		return sum(a, b)

	}


}
