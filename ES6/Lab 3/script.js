
function tryClass(){
	
	
	
class Polygon{
	
	constructor(w,h){
		
		this.width=w;
		this.height=h;
		
	}
	//Properties
	get Height(){
		return this.height;
	}
	set Height(h){
		this.height=h;
	}
	get Width(){
		return this.width;
	}
	set Width(w){
		this.width=w;
	}
	
	
	//Methods

	CalculateArea(){
		
		return this.width * this.height;
	}
	toString(){
		
		
		return `Width is : ${this.width},,Height is ${this.height},,Area is :${this.CalculateArea() }`;
		
	}
	
}

class Square extends Polygon {
	
	constructor(len){
		
		super(len,len);
	}
	
	toString(){
		
		
		return `Width is : ${this.width},,Height is ${this.height},,Area is :${this.CalculateArea() }`;
		
	}
}

class Rectangle extends Polygon {
	
	constructor(w,h){
		
		super(w,h);
	}
	
	//Don't need it  because Polygon is a rectangle now
	toString(){
		
		
		return `Width is : ${this.width},,Height is ${this.height},,Area is :${this.CalculateArea() }`;
		
	}
}

class Circle extends Polygon {
	
	constructor(r){
		
		super(r,r);
	}
	
	static get PI(){return 3.14;}
	
	toString(){
		
		
		return `Radius is  : ${this.width},,,,Area is :${this.CalculateArea() * Circle.PI }`;
		
	}
}


class Traingle extends Polygon {
	
	constructor(h,b){
		
		super(b,h);
	}
	
	toString(){
		
		
		return `Base is : ${this.width},,Height is ${this.height},,Area is :${this.CalculateArea()*0.5 }`;
		
	}
}


//Declare Objects
var s=new Square(2);

console.log(`Square toString is :  ${s.toString()}`);
//"Width is : 2,,Height is 2,,Area is :4"
//s.CalculateArea();//4 ,,,s.height;//2 ,,  s.width;//2


var rec=new Rectangle(4,5);
console.log(`Rectangle toString is  : ${rec.toString()}`);

var circle=new Circle(4);
console.log(`Circle toString is  : ${circle.toString()}`);


var traingle=new Traingle(4,5);
console.log(`Traingle toString is  : ${traingle.toString()}`);

}



function trySpecialConstructor(){
	
	class MyFun{
	
	constructor(...arr){
		if(arr.length !=2){
			throw "Number of parameters should equal to 2";
		}
		
	}
	
}
var tryMyFun=new MyFun(4);

}


function tryAJAX(){

 var select=document.getElementById("Name1"); 
 var select2=document.getElementById("Name2");


var JSONobj={};
function GetData(){
		var xhr=new XMLHttpRequest();
		
	    //var node;
		xhr.onreadystatechange=function(){
			//xhr=this
			if(xhr.readyState==4){
				
				if(xhr.status==200){
					JSONobj=JSON.parse(xhr.responseText);
					//select.appendChild("")
					for(e in JSONobj){
						//console.log(e);
						select.innerHTML+=`<option value='${e}'>${e}</option>`;
						
					}
				}
				console.log(JSONobj);
			}
	}
			xhr.open("Get","rockbands.json");
            xhr.send();
}
$("#Name1").on("change",function(){
							$("#Name2").css("display","block");
							/*for(e2 in JSONobj[this.value]){

                            //console.log(JSONobj[this.value][e2]["name"]);
								
                              select.innerHTML+=`<option
                              value='${JSONobj[this.value][e2]['value']}'>
                             ${JSONobj[this.value][e2]['name']}</option>`;
                                       
					           
							}*/
	                       select2.innerHTML="<option>Choose</option>";
						   console.log("Value :"+this.value);

                          for(e2 in JSONobj[this.value]){

                           // console.log(JSONobj["eagles"][e2]["name"]);

						   //console.log("Value :JSONobj[this.value]"+JSONobj[this.value]);
						   //console.log("e2[name]" +e2["name"]);
						  // console.log("Value :"+JSONobj[this.value][e2]['value']);
						   //console.log("Name :"+JSONobj[this.value][e2]['name']);

                             select2.innerHTML+=`<option
                              value='${JSONobj[this.value][e2]['value']}'>
                             ${JSONobj[this.value][e2]['name']}</option>`;
                              
					           
							}   
							
});

$("#Name2").on("change",function(){

	//console.log(this.value);
	location.href=this.value;
});
GetData();

}

function tryProxy(){
/**/
var target={
name:"ahmed",
address:"cairo",
age:25,
};
var handler={};



handler.set =function(obj,prop,value){
	
	if(prop=="name"){
		if(typeof value=="string")
			if(value.length<=7 &&  value.length>=3)
				obj.prop=value;
			else
			throw "Length should be between 3 and 7 character ";
		else
			throw "Type of name should be string";

	}
	else if(prop=="address"){
		
			if(typeof value=="string")
				obj.prop=value;

		    else
			  throw "Type of address should be string";
	}
	else if(prop=="age"){
		
			if(typeof value=="number")
			 if(value<=60 &&  value>=25)
				obj.prop=value;
			else
			throw "age property value should be between 25 and 60 character ";
		else
			throw "Type of age should be number";
	}
	else{
		throw `Can't defined this property:${prop}`;
	}
	
};


		

 MyProxyObject=new Proxy(target,handler);

var prox1=new Proxy(target,handler);
	
}


tryAJAX();
var MyProxyObject;

	