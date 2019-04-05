var fs=require("fs");//1.require file system(module)(api=>methods and prop)


var AddPage,AllEmployees,EmployeesJson;

//2.Read Files that you may need them


//AddPage
fs.readFile("index.html",function(err,data){

if(err){throw "Error in reading File;"+err;}

   //AddPage=data.toString();//Will print html code like string not parse it

   console.log("AddPage:");
   AddPage=data;
   //console.log(AddPage.toString());
   
})


//AllEmployee
fs.readFile("AllEmployees.html",function(err,data){

if(err){throw "Error in reading File;"+err;}

   AllEmployees=data;
   
   console.log("AllEmployees:");
   //console.log(AllEmployees.toString());
})

/*
    myRequest.url:/public/bootstrap4/css/bootstrap.min.css
myRequest.url:/public/bootstrap4/js/jquery.min.js
myRequest.url:/public/bootstrap4/js/popper.js
myRequest.url:/public/bootstrap4/js/bootstrap.min.js
*/
var b1,b2,b3,b4;

fs.readFile(__dirname+"/public/bootstrap4/css/bootstrap.min.css",function(err,data){
if(err){throw "Error in reading File;"+err;}
b1=data;

})


fs.readFile(__dirname+"/public/bootstrap4/js/jquery.min.js",function(err,data){
if(err){throw "Error in reading File;"}
b2=data;
})

fs.readFile(__dirname+"/public/bootstrap4/js/popper.js",function(err,data){
if(err){throw "Error in reading File;"+err;}
b3=data;

})
fs.readFile(__dirname+"/public/bootstrap4/js/bootstrap.min.js",function(err,data){
if(err){throw "Error in reading File;"+err;}
b4=data;

})

var http=require("http");
var HandleReqRes=function(myRequest,myResponse){

myResponse.writeHead(200,{"content-type":"text/plain"});

//Get Methods
if(myRequest.method=="GET"){
            myResponse.writeHead(myResponse.statusCode,{"content-type":"text/html"});
         console.log("myRequest.url:"+myRequest.url);
            
     switch(myRequest.url){

     
            case "favicon.ico":
                console.log("myRequest.url:"+myRequest.url); myResponse.end();
                break;
       
            case "/public/bootstrap4/css/bootstrap.min.css":
                    myResponse.writeHead(myResponse.statusCode,{"content-type":"text/css"});
                    myResponse.write(b1); myResponse.end();
                    break;
             case "/public/bootstrap4/js/jquery.min.js":
                    myResponse.writeHead(myResponse.statusCode,{"content-type":"text/js"});
                    myResponse.write(b2); myResponse.end();
                    break;
            case "/public/bootstrap4/js/popper.js":
                    myResponse.writeHead(myResponse.statusCode,{"content-type":"text/js"});
                    myResponse.write(b3); myResponse.end();
                    break;
            case "/public/bootstrap4/js/bootstrap.min.js":
                    myResponse.writeHead(myResponse.statusCode,{"content-type":"text/js"});
                    myResponse.write(b4); myResponse.end();
                    break;

            case "/":
            case "/index":

                 myResponse.write(AddPage); myResponse.end();
                break;

            case "/AllEmployees.html":
            case "/AllEmployees":
                myResponse.write(AllEmployees); 
                myResponse.end();
                               
                break;

           case "Employees.json":
           case "/Employees.json":
                console.log("Reading Json File Switch Case");

               fs.readFile("Employees.json",function(err,data){
                console.log("Reading Json File Switch Case");

                if(err){throw "Error in reading File";}
                  myResponse.writeHead(myResponse.statusCode,{"content-type":"text/json"});                
                 // console.log(JSON.stringify(JSON.parse(data)));
                  myResponse.write(JSON.stringify(JSON.parse(data))); 
                  myResponse.end();                  
                  
              })
           
                
                break;
     } 
    }


else if(myRequest.method=="POST"){

        var MyJSONobj=[];
         //myResponse.write("Please Use Click on The Button ^_^");
         var MyPostData="";
         myRequest.on("data",function(data){

            
             var Jsondata=fs.readFileSync("./Employees.json",function(err){

                if(err){throw "Error in reading File";}
              })
             
               MyJSONobj=JSON.parse(Jsondata);

                MyPostData+=data;
                console.log("MyPostData:"+MyPostData);
                console.log("MyJSONobj:"+MyJSONobj);
                
           

        });
        
        myRequest.on("end",function(){


              console.log("EndPost_MyPostData:"+MyPostData);  
              console.log("EndPost_MyPostData:"+MyPostData.split("&").pop());             
              console.log("EndPost_MyPostData:"+MyPostData.split("&")[2].split("=")[0]);

               var Data=MyPostData.split("&");
               var uName=Data[0].split("=")[1];
               var uSalary=Data[1].split("=")[1];
               var button=Data[2].split("=")[0];
               
               
              if(button=="AddEmployee"){//Post from index.html

                 MyJSONobj.push({"Name":uName,"Salary":uSalary})
                 console.log("AddEmployee button");
                 fs.writeFile("./Employees.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
                            if(err)
                                throw err;
                        })  

                    
                        //myResponse.statusCod=301;
                        myResponse.writeHead(myResponse.statusCode,{Location:"/AllEmployees.html"});


              }             
              else{//Post from AllEmployees.html

                  console.log("Update button");
                            
                    var data=fs.readFileSync("./Employees.json")
                    MyJSONobj=JSON.parse(data);
                    console.log("MyJSONobj :"+ MyJSONobj)
                 

                   var Data=MyPostData.split("&");
                   var count=Data[0].split("=")[1];
                   var userName=Data[1].split("=")[1];
                   var userSalary=Data[2].split("=")[1];
                   var button=Data[3].split("=")[0];
               
               
                    console.log("count:"+count);
                    console.log("Name:"+userName);		
                    console.log("Salary:"+userSalary);
                    console.log("MyJSONobj :"+ MyJSONobj);
                    console.log("MyJSONobj[count][Name]:"+ MyJSONobj[count]["Name"]);
                    console.log("MyJSONobj[0] :"+ MyJSONobj[0]);
                    
                    
                    MyJSONobj[count]={};
                    MyJSONobj[count]={"Name":`${userName}`,"Salary":userSalary};
                  console.log("Update button");
                
                 fs.writeFile("./Employees.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
                            if(err)
                                throw err;
                        })  

                    
                        //myResponse.statusCod=301;
                        myResponse.writeHead(myResponse.statusCode,{
                            
                            Location:"/AllEmployees.html"
                             ,"content-type":"text/html"    
                    }
                        
                        );


              }
                         
                myResponse.end();
        })
}


}
http.createServer(HandleReqRes).listen(8458);