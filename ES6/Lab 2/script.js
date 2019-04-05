 
 /*
 Set vs WeakSet:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 
 Map vs WeakMap:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 */
 
 
/*function *GenerateFunFib(lengthFib){
let sum=0;
for(let i=1;i<lengthFib;i++){
         yield (i+(i-1));  
}
}*/
 function *GenerateFunFib(lengthFib){
	 
	 [a,b]=[0,1];
	 for(let i=1;i<=lengthFib;i++){
         yield a;
		 [a,b]=[b,a+b];
         		 
}

 } 
 
 function *GenerateFunFibMax(lengthFib){
	 let max=lengthFib;
	 [a,b]=[0,1];
	 for(let i=1;i<=lengthFib;i++){
         
		 if(max>a)
			 yield a;
		 [a,b]=[b,a+b];
		 
         		}

 } 
	 
for(f of GenerateFunFibMax(9)) console.log(f);
 
 /*
 
 function *GenerateFunFib(lengthFib){

  [a, b] = [0, 1]
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}
 */
 
 var Course={courseName:"JS", courseDuation:15, courseOwner:"Ali",

 
 }

 Course["age"]=10;
 Course.x=20;
 
 /*
 Course={courseName: "JS", courseDuation: 15, courseOwner: "Ali", age: 10, x: 20,Symbol(Symbol.iterator):ƒ ()}
 */
 Course[Symbol.iterator]=function(){
	 let properties=Object.keys(Course);
	 let count=0;
	 let _done=false;
	 
	 NextObj={
		 next:function(){
		 if(count>=properties.length)
			 _done=true;
		 
		 obj={done:_done,value:properties[count++]};//+" "+Course[properties[count]]};
		 return obj;
	 }
	}
	return NextObj;
	 
 }
 
for(prop of Course) console.log(`Property: ${prop}, Value: ${Course[prop]}`);

//for(prop in Course) console.log(prop+" : "+Course[prop]);
//for(prop of Course) console.log(prop+" : "+Course[prop]);
  

 
 /*
 
 Course[Symbol.iterator]=function(){
     
	 let properties=Object.keys(this);
     let values=Object.values(this);
	 let count=0;
	 let _done=false;
	 
	 NextObj={
		 next:function(){
		 if(count>=properties.length)
			 _done=true;
		 
		 obj={done:_done,value:[properties[count++],values[count]]};
		 return obj;
	 }
	}
	return NextObj;
	 
 }
 


for((k,v) of Course) console.log(k+":"+v);
 
 */
 
 /*
 Set vs WeakSet:
 WeakSet objects can be deleted by garabage collector
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 
 Map vs WeakMap:
 WeakMap can't call .Keys method
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 */
 