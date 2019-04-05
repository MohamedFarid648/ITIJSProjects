importScripts("j1.js", "j2.js")

var x = 10

onmessage = function (e) {

	var result = e.data[0] + e.data[1] + x

	postMessage([result, x, j1, j2])
	close();
}
