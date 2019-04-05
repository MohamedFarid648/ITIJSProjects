
class myClass{
//var x	
	constructor(){
		this._prop=10;
		
		
	}
	get p1(){return this._prop}
	
	static fun(){
		console.log(10);
	}
	
	set p1(v){this._prop=v;}
	
}


var c=new myClass()

//c._prop
//c.p1

myClass.fun()