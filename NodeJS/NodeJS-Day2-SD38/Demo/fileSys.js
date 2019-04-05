var fs = require("fs");

fs.writeFile("yasser.txt", "new file", function (err) {
	console.log("errr")

})

//to delete file
fs.unlink("yasser.txt", function (err) {
	console.log("err")
});


//dealing with folders
//fs.mkdir("./test", function (err) {
//console.log(err)
//});

//fs.rmdir()
process.chdir("./test");

fs.writeFile("yasser.txt", "new file", function (err) {
	console.log("errr")

})

fs.writeFile("file1.txt", "new file", function (err) {
	console.log("errr")

})
fs.writeFile("file2.txt", "new file", function (err) {
	console.log("errr")

})
//process.chdir("../");
fs.readdir("./", function (err, files) {

	if (err)
		console.log(err)
	else {

		files.forEach(function (elem) {
			console.log(elem);
		})

	}

})


/*
//var data=fs.readFileSync("yasser.txt",function(err){
	
//})

fs.readFile("yasser.txt",function(err,data){
	if(err){
		console.log("err occures")
	}
	else{
		
		console.log(data.toString());
	}
	
});

//console.log(data.toString());
console.log("final")


fs.appendFile("yasser.txt","\nthis is new statement","utf8",function(err){console.log(err)});



*/
