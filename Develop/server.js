var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(res,req){
    res.setEncoding("Hello friends!")
})

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(function(req,res){
    res.setHeader("Content-Type", "text/plain")
    res.write("you posted:")
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function(){
    console.log("App is listening on PORT:" + PORT);
});