
//import of nammed Export
//import {} from './Module.js'
/*import * as mod from './Module.js'

function fun(){console.log("Mohamed Gamal");}
//console.log(myMod.PI);

var result = fun(1, 2)

console.log(result);

*/



//import of default Export
import myClass from './Module.js'

var c= new myClass(10);

console.log(c.prop)
console.log(c.fun(1,2))