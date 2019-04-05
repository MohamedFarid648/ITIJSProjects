var target = {
	x: 10,
	y: 20
};

var handler = {
	get (o, prop) {
		if (o[prop] == undefined)
			o[prop] = "new property";

		return o[prop]
	}


}




handler.set = function (obj, prop, val) {
	if (prop == "x")

		if (typeof val == "number")
			obj[prop] = val
	else throw "error message" //new TypeError("")

}


var obj = new Proxy(target, handler)
