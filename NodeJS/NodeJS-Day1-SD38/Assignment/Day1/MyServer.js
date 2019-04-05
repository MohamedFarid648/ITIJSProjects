var http=require("http");
var HandleReqRes=function(myRequest,myResponse){

myResponse.writeHead(200,{"content-type":"text/plain"});

if(myRequest.method=="GET"){

    if(myRequest.url=="favicon.ico"){
    console.log("myRequest.url"+myRequest.url);


    }else{
                              
    var UrlData=myRequest.url;//ex:/sum/1/2/3
    
  
    UrlData=UrlData.split("/").slice(1);//skip first element (Empty Element)/
    var Operator=UrlData[0];//Sum,multiple,div
  
    UrlData=UrlData.slice(1);//skip first element[sum,...)]
    
    var result;   
    var initialVar;
    if(Operator=="sum"){
        
       result=UrlData.reduce(function(perviousResult,currentElement){

        return parseInt(perviousResult)+parseInt(currentElement);
    },0);

    }
    else if(Operator=="sub"){ result=UrlData.reduce(function(perviousResult,currentElement){

        return parseInt(perviousResult)-parseInt(currentElement);
    },0);}
    else if(Operator=="multiple"){

 result=UrlData.reduce(function(perviousResult,currentElement){

        return parseInt(perviousResult)*parseInt(currentElement);
    },1);

    }
    else if(Operator=="div"){
        
 result=UrlData.reduce(function(perviousResult,currentElement){

        return parseInt(perviousResult)/parseInt(currentElement);
    },1);

    }


       

   myResponse.write("Your result is "+result);


    }


}else if(myRequest.method=="POST"){

myResponse.write("Please Use Click on The Button ^_^");
}


myResponse.end();
}
http.createServer(HandleReqRes).listen(8084);