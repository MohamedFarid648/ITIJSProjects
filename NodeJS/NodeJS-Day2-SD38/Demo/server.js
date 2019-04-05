var http = require("http");
var fs = require("fs");

var html = "",
	css = "",
	welcome = "";
fs.readFile("./style.css", function (err, data) {
	if (err)
		console.log("css read file err");
	else {

		css = data;

	}


})
fs.readFile("./main.html", function (err, data) {
	if (err)
		console.log("html read file err");
	else {

		html = data;

	}

})

fs.readFile("./welcome.html", "utf8", function (err, data) {
	if (err)
		console.log("html read file err");
	else {

		welcome = data;

	}

})
http.createServer(function (req, res) {
	console.log("server")
	//req-->get
	if (req.method == "GET") {
		//req on root 
		switch (req.url) {

			case "/":
			case "/facebook":
			case "/main.html":
				console.log(req.url + "req")
				res.writeHead(res.statusCode, {
					"content-type": "text/html"
				});
				res.write(html);
				res.end();
				break;

			case "/style.css":
				res.writeHead(res.statusCode, {
					"content-type": "text/css"
				});
				res.write(css);
				res.end();
				break;

			case "/data.json":
				fs.readFile("./data.json", function (err, data) {
					//var x= JSON.parse(data)
					//JSOn.stringify(x)

					res.writeHead(res.statusCode, {
						"content-type": "text/json"
					});
					res.write(JSON.stringify(JSON.parse(data)))

					res.end();
				})
				break;





		}

		//res.end();
	}
	//req-->post
	else if (req.method == "POST") {


		console.log("post request")
		var bodyData = "";

		req.on("data", function (data) {


			bodyData += data;



		})

		req.on("end", function () {
			//read file

			var name = bodyData.split("&")[0].split("=")[0]
			var val = bodyData.split("&")[0].split("=")[1]


			fs.readFile("./data.json", function (err, data) {


				var obj = JSON.parse(data)


				//var o[name] = val
				//obj.push(o)



				console.log(name)
				console.log(val)
				console.log(obj)
				var o = {};
				o[name] = val;
				obj.push(o);

				fs.writeFile("./data.json", JSON.stringify(obj), function (err) {})



			})

			//update info

			//write into file

			console.log(bodyData)
			console.log("end")

			res.setHeader("Set-Cookie", ["username=" + val]);

			res.writeHead(res.statusCode, {
				"content-type": "text/html"
			});


			welcome = welcome.replace("{client}", val)
			res.write(welcome);
			res.end();
		})





	}




}).listen(7001);

console.log("listening")
