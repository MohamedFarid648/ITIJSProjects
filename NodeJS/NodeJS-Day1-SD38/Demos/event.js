//1)require event Module
var myEvent = require("events");

//2)inherite from
class Emitter extends myEvent {





}

//3)create event obj
var myEmitter = new Emitter();

//listen
myEmitter.on("lookup", function() {
  console.log("lookup event fired");
});
myEmitter.on("lookup", function() {
    console.log("lookup once");
  });
  myEmitter.once("lookup", function() {
    console.log("lookup Abdallah");
  });
//
//
//
//console.log("start");
myEmitter.emit("lookup");
setTimeout(function() {
  myEmitter.emit("lookup");
}, 1000);
console.log("end");
