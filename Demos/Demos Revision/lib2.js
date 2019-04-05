//var x = 20;
/*
var objLib2 = {
	x: 10
}
*/
/*
(function f(global){
	
	global.obj;
	
	
	
})(window)
*/

(function (global) {
	//
	//
	//inner function

	var objLib2 = {
		x: 10
	}


	window._M = global._M = objLib2


})(window);
