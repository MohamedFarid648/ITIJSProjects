
function getRandomInt(max){
    
    var randomNum=Math.random()*max;
    
    function ceil(){
       return  Math.ceil(randomNum);
    }
    return ceil();//return call of ceil not body of ceil
    
}

console.log("getRandomInt(5):Return random number from 1 to 5:"+getRandomInt(5));

//inner Function
function a(x) {



	function b() {
		var y = 2;
		return x * y;

	}

	return b(x);


}

console.log("a(10)");
console.log(a(10));
///b(10);//error



console.log("arr.join");

var arr=[1,2,3,4,5];
console.log(arr.join("__"));//1__2__3__4__5

var str="abcdefg";
//call
//apply
console.log("str.join.call");

console.log([].join.call(str,"__"));
console.log("str.join.apply");

console.log(arr.join.apply(str,["__"]));
//arr.join.call(str,"__");



console.log("str.bind");

//bind
console.log([].join.bind(str,"--")());
var strFun=[].join.bind(str,"--")//fun
console.log(strFun(":"));


console.log("IIFE:");
//IIFE
(function (x){
	x++;
	console.log("anonyomus function(arguments.callee(x)):");
	if(x<5)
	arguments.callee(x)
	
}(1))



//overloading
console.log("adding(a,b):");
function adding(a,b) {
	
	console.log("arguments[0]:"+arguments[0])
	console.log("arguments[1]:"+arguments[1])
	console.log("arguments[0]+arguments[1]:"+(arguments[0]+arguments[1]));

	console.log("arguments.callee:"+arguments.callee);
	
	var sum=0;
	for(i=0;i<arguments.length;i++)
		sum+=arguments[i];
	return sum;//arguments[0]+arguments[1];//a + b;
}


console.log("adding(1, 2):"+adding(1, 2)); //3
console.log("adding(1, 2,3,4,5):"+adding(1, 2, 3, 4, 5)); //3
console.log("adding():"+adding()); //3
