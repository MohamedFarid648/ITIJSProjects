var Myexpress=require("express");
var MyPath=require("path");
var MyApp=Myexpress();
var MyJSONobj=[];
var bodyParser=require("body-parser");

var MyFile=require("fs");



//1.Listen
MyApp.listen(8457,function(){
	
	console.log("Start Listening");
})

//2.Use Static Files
//MyApp.use(Myexpress.static("./public"));

//Include Body Parser to translate Body in post data to express
MyApp.use(bodyParser.urlencoded({
	extended:true
}))

//3.Route URLs
     
	 //3.1 Home Page(Add Employee in index.html)
	MyApp.get("/",function(req,res){
        

    MyFile.readFile("./Employees.json",function(err,data){
				if(err)
					throw err;

				MyJSONobj=JSON.parse(data);
				console.log("MyJSONobj :"+ MyJSONobj)
           })
		console.log("index.html");
		res.sendFile(MyPath.join(__dirname+"/index.html"));

	})
	
	//3.2 Post from index.html
	
	MyApp.post("/",function(req,res){
		console.log("Body::"+req.body);//please install body parser first to translate body from req to express server

		var userName=req.body.Name;
		var userSalary=req.body.Salary;
		console.log("Name:"+userName);
		console.log("Salary:"+userSalary);
	    MyJSONobj.push({"Name":userName,"Salary":userSalary});
	
		MyFile.writeFile("./Employees.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		})
		

		res.redirect("/AllEmployees")
	})
	
	  //3.3 AllEmployees
	MyApp.get("/AllEmployees",function(req,res){

		console.log("AllEmployees.html");
		//Didn't save data to MyJSONobj unfortunately
	 /*  MyFile.readFile("./Employees.json",function(err,data){
				if(err)
					throw err;

				MyJSONobj=JSON.parse(data);
				console.log("MyJSONobj :"+ MyJSONobj)
           })*/
		res.sendFile(MyPath.join(__dirname+"/AllEmployees.html"));
})
	
	
	

	//3.3.1 Employees.json that in  AllEmployees
	MyApp.get("/Employees.json",function(req,res){

		console.log("/Employees.json.");
		res.sendFile(MyPath.join(__dirname+"/Employees.json"));
		
	})
	
	//3.3.2 AllEmployeesPost
	MyApp.post("/AllEmployees",function(req,res){


		var data=MyFile.readFileSync("./Employees.json")
		MyJSONobj=JSON.parse(data);
		console.log("MyJSONobj :"+ MyJSONobj)
		console.log("Body_AllEmployees::"+req.body);
		//please install body parser first to translate body from req to express server

        var count=req.body.count;
		console.log("count:"+count);
		
		var userName=req.body.txtName;
		var userSalary=req.body.txSalary;
		console.log("count:"+count);
		console.log("Name:"+userName);		
		console.log("Salary:"+userSalary);
		console.log("MyJSONobj :"+ MyJSONobj);
		console.log("MyJSONobj[count][Name]:"+ MyJSONobj[count]["Name"]);
		console.log("MyJSONobj[0] :"+ MyJSONobj[0]);
		
		
		  MyJSONobj[count]={};
		  MyJSONobj[count]={"Name":`${userName}`,"Salary":userSalary};
	   // MyJSONobj.push({"Name":userName,"Salary":userSalary});
	
		MyFile.writeFile("./Employees.json",JSON.stringify(MyJSONobj),'utf-8',function(err){
			if(err)
				throw err;
		})

		res.redirect("/AllEmployees")
	})
	
     //4.Static Files
		MyApp.get("/public/bootstrap4/css/bootstrap.min.css",function(req,res){

			console.log("/public/bootstrap4/css/bootstrap.min.css");
			res.sendFile(MyPath.join(__dirname+"/public/bootstrap4/css/bootstrap.min.css"));

		})


		MyApp.get("/public/bootstrap4/js/popper.js",function(req,res){

		console.log("/public/bootstrap4/js/popper.js");
		res.sendFile(MyPath.join(__dirname+"/public/bootstrap4/js/popper.js"));
		
	})
		MyApp.get("/public/bootstrap4/js/bootstrap.min.js",function(req,res){

		console.log("/public/bootstrap4/js/bootstrap.min.js");
		res.sendFile(MyPath.join(__dirname+"/public/bootstrap4/js/bootstrap.min.js"));
		
	})
	
		MyApp.get("/public/bootstrap4/js/jquery.min.js",function(req,res){

			console.log("/public/bootstrap4/js/jquery.min.js");
			res.sendFile(MyPath.join(__dirname+"/public/bootstrap4/js/jquery.min.js"));

		})

		MyApp.get("/public/script.js",function(req,res){

			console.log("/public/script.js");
			res.sendFile(MyPath.join(__dirname+"/public/script.js"));

		})
		
	MyApp.get("/public/script.js",function(req,res){

			console.log("/public/script.js");
			res.sendFile(MyPath.join(__dirname+"/public/script.js"));

		})
		
		//5.