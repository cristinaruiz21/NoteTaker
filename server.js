var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// app.get("/", function(res,req){
//     res.setEncoding("Hello friends!")
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(function(req,res){
//     res.setHeader("Content-Type", "text/plain")
//     res.write("you posted:")
//     res.end(JSON.stringify(req.body, null, 2))
// })
var api = require("./routing/api-routes");
var html = require("./routing/html-routes");

app.use(api);
app.use(html);

app.listen(PORT, function(){
    console.log("App is listening on PORT:" + PORT);
});