const express = require("express")
var app = express();

app.listen(4000, function(){
    console.log("hii prince")
});

app.use(express.static("public"));