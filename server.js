var express = require('express'), 
        app = express();

app
   .use(express.static('./public'))
   .get("/", function(req, res) {
		res.sendFile("main.html", {"root": __dirname});
    })
   .listen(3000);