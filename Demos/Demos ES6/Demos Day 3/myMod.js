/*global.x = 10;

var y = function () {

	console.log(x)
}
*/

(function (context, modName, definition) {
	//
	//
	if ((typeof module !== "undefined") && (module.exports)) { //for node use

		module.exports = definition();
	} else { //for client use
		//
		//
		//
		context[modName] = definition();
	}

})(this, "myMod", function () {
	/*function mostafa(){
	console.log("ay 7aga")	
	}
	*/
	var cart = class {
		constructor() {
			this.items = [];
		}

	}

	cart.prototype.addToCart = function (itemNm, itemPrice) {
		this.items.push({
			name: itemNm,
			price: itemPrice
		})



	}

	cart.prototype.calcTotalPrice = function () {

		return this.items.reduce(function (p, c) {

			return p + parseInt(c.price)
		}, 0)

	}




	return cart;


})

/*

class cart {
	constructor() {
		this.items = [];
	}

}

cart.prototype.addToCart = function (itemNm, itemPrice) {
	this.items.push({
		name: itemNm,
		price: itemPrice
	})



}

cart.prototype.calcTotalPrice = function () {

	return this.items.reduce(function (p, c) {

		return p + parseInt(c.price)
	}, 0)

}



//exports.myCart = cart;

module.exports = {
	cart
}
*/


/*
var items = [];


function addToCart(itemNm, itemPrice) {
	items.push({
		name: itemNm,
		price: itemPrice
	})



}



exports.calc=function calcTotalPrice(){
	
	return items.reduce(function(p,c){
		
		return p+parseInt(c.price)
	},0)
	
}

exports.adding=addToCart;



*/
