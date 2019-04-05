var myMod = require("./myMod.js");




var cart1 = new myMod();
cart1.addToCart("laptop", 5000);

cart1.addToCart("mobile", 10);


console.log("mod1" + cart1.calcTotalPrice());


var cart2 = new myMod();
cart2.addToCart("laptop", 15000);

cart2.addToCart("mobile", 100);


console.log("mod2" + cart2.calcTotalPrice());
//console.log(x);

/*
mod.adding("laptop", 5000);

mod.adding("mobile", 10);


console.log("mod1" + mod.calc());


var mod2 = require("./myModule.js");

mod2.adding("laptop", 15000);

mod2.adding("mobile", 100);


console.log("mod2" + mod2.calc());
*/
