var http = require("http");

http
  .createServer(function(req, res) {
    console.log(req.method);
    console.log(req.url);

    if (req.method == "GET") {
      if (req.url == "/favicon.ico") {
        //res.end();
      } else {
        var data = req.url;

        // console.log(data)
        //console.log(data.split("/"));
        var result = data
          .split("/")
          .slice(1)
          .reduce(function(p, c) {
            return parseInt(p) + parseInt(c);
          }, 0);
        console.log(result);
      }

      console.log("request arrived");
      res.writeHead(200, { "content-type": "text/plain" }); //res.statusCode
      res.write("this is a response from server 3030");
      res.write("<h1>welcome to NODEJS World</h1> " + result);
      res.end();
    } 
    else if (req.method == "POST") {
      res.writeHead(200, { "content-type": "text/plain" }); //res.statusCode
      res.write("this is a response from server 3030 POST REQ");
      res.end();
    }
  })
  .listen(3030);
