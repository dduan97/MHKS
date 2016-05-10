//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var passwordHash = require('password-hash');
var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var server = http.createServer(app);

// setting views directory?
app.use(express.static(path.resolve(__dirname, 'views')));

// setting view engine for html?
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// setting bodyParser for x-www-form-urlencoded and json?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// render login page when navigating to root
app.get('/', function(req, res, next){
    res.render('login');
})

// deal with login requsts
app.post('/auth', function(req, res, next){
    console.log(req.params);
    console.log(req.body.password);
    if(req.body.password == undefined){
        res.send("ahhhhhhh!");
    }
    else if(req.body.password == "Fuckerwanker"){
        res.send("correct!");
    }
    else{
        res.send("dagnabbit!");
    }
    // var password = req.params.password;
    // var correct = passwordHash.generate("Fuckerwanker");
    // res.send(req.params);
    // console.log(req.params);
    // return;
    // console.log(password);
    // console.log(correct);
    // if(passwordHash.verify(password, correct)){
    //     res.send("correct!");
    // }
    // else{
    //     res.send("dagnabbit!");
    // }
})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});
