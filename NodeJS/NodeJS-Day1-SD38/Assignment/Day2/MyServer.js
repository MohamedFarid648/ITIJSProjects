var fs=require("fs");


var AddPage,AllEmployee;


//AddPage
fs.readFile("Add.html",function(err,data){

if(err){throw "Error in reading File;"}

   //AddPage=data.toString();//Will print html code like string not parse it
   AddPage=data;
})


//AllEmployee
fs.readFile("AllEmployee.html",function(err,data){

if(err){throw "Error in reading File;"}

   AllEmployee=data;
})



var http=require("http");
var HandleReqRes=function(myRequest,myResponse){

myResponse.writeHead(200,{"content-type":"text/plain"});

if(myRequest.method=="GET"){
            myResponse.writeHead(myResponse.statusCode,{"content-type":"text/html"});

     switch(myRequest.url){

     
            case "favicon.ico":
                console.log("myRequest.url"+myRequest.url);
                break;
            case "/":
            case "Add.html":

            myResponse.write(AddPage);
                break;
            case "AllEmployee.html":
                myResponse.write(AllEmployee);                
                break;
     } 
     myResponse.end();
                           
    }


else if(myRequest.method=="POST"){

         //myResponse.write("Please Use Click on The Button ^_^");
         var MyPostData="";
         myRequest.on("data",function(err,data){

                MyPostData+=data;
                console.log("MyPostData:"+MyPostData);
                
           

        });
        
        myRequest.on("end",function(){

              console.log("EndPost_MyPostData:"+MyPostData);             
               myResponse.end();
        })
}


}
http.createServer(HandleReqRes).listen(8084);