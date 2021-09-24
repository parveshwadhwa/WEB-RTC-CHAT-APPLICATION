const express = require("express");
const socket = require("socket.io");
var app = express();


var server = app.listen(4000, function(){
    console.log("hii prince");
});

app.use(express.static("public"));

var upgradedServer = socket(server)

upgradedServer.on("connection", function(socket){
    socket.on('sendingMessage', function(data){
        upgradedServer.emit('broadcastMessage', data);
    })
})