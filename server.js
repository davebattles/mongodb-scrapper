// ███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗ 
// ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗
// ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝
// ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗
// ███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
             

var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var cheerio = require('cheerio');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router);
require("./config/routes")(router);
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
  if (error) {
    console.log(error);
  }
  else {
    console.log("Mongoose has succesfully connected!");
  }
})

app.listen(PORT, function(){
  console.log ("Server has started on port: " + PORT);
});