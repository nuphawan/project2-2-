var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 2020; 
app.use (express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.get("/index.handlebars", function(req, res){
    res.render("index.handlebars"); 
});

require("dotenv").config();

let routes = require("./routes/api-routes");
app.use(routes);

db.sequlize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT" + PORT);
    });
});