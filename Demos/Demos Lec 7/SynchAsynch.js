document.addEventListener("click", function () {
	console.log("click");
}, false);

console.log("start");

function wait7sec() {
	var ms = 12000 + new Date().getTime();
	while (new Date().getTime() < ms) {}

	console.log("finished");

}

console.log("function start");
wait7sec(); //

setTimeout(timeoutHandler, 5000);

wait7sec();



function clickHandler() {
	console.log("click");
}


function timeoutHandler() {
	console.log("setTimeout");
}
