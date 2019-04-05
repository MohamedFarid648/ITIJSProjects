var express = require("express");//request the module
var path = require("path")
var app = express();//call it(return express object=>Factory Pattern)

var bodyparser = require("body-parser");

//3rd party middleware
app.use(bodyparser.urlencoded({
	extended: true
}));

//param middleware
app.param("usrnm", function (req, res, nxt, val) {
	console.log(val)
	req.params.usrnm = "NODEJS";
	nxt();

})


app.all("/", function (req, res, nxt) {
	//
	//
	//
	console.log("happen with get and post")
	nxt()


})

//params passed in url
//get-->querystring
//post-->req body 
app.get("/", function (req, res) {
	res.send("abc message")



})

app.get("/name", function (req, res, next) {

	console.log("name url request ")
	next()
}, function (req, res) {

	//res.send("Yehia");
	res.redirect("/name/yehia")



})
app.get("/name/:usrnm", function (req, res) {
	var nm = req.params.usrnm
	
	console.log(req.params.usrnm)
	//res.redirect("/name")
	res.render("template.ejs", {
		username: nm
	})



})


app.post("/", function (req, res) {
	//
	var username = req.body.usrname;
	res.send("info of client:" + username)


})

app.get("/test/express", function (req, res) {

	res.redirect("/")


})

app.get("/express", function (req, res) {

	//__dirname+/file.html
	res.sendFile(path.join(__dirname + "/express.html")) //absolute address
});



//built-in middleware
app.use(express.static("./public"));

app.listen(7070, function () {
	console.log("listening..")
});
