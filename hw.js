//var server = require('./server.js')
var express = require('express');//module
var request = require('request'); //module: deprecated

//method function
//constructor in js- characteristics via object properties
//reference should be object : using that object we can
//get or use the features of the function : express()
//puts the features of express into a variable: app
var app = express(); // instead of directly callinh module we can focus on app variable

//GET POST DELETE : invoke the model
//model :DAO :data access object :databased

// no specific path is mention
app.get('/', function (req, res) {
    console.log("GET");
    res.send("I am here");
})

//difference is in path: /student
app.get('/student', function (req, res) {
    console.log("GET the students from /studend");
    res.send('Im a student');
})

//this is a get request for : abxcd,ab123cd and so on...
app.get('/ab*cd', function (req, res) {
    if (req.statusCode == 200)//ensure we have got the data
        console.log("get for query string");
    res.send('pattern matching');
})


app.post('/', function (req, res) {
    console.log("POST");
    res.send("I an post");
})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().address;
    console.log(host + port);
})


//http://127.0.0/manager
app.delete('/manager', function () {
    //write a logic that should be deleted preiodically or based on same condition
    //exmaple: a manager leaving a company
    //instead of deleting it from monofb query
    //we can send a delete request which interbeally call the delete mechanism

    console.log('I am delete');
    res.send("DELETE")
})

//+ to concatenate or add it as a part of request URL

request.get('http://bengaluru', options, function (err, res, body) {

    if (err) console.log("error");
    //we shall use 2 major statuscode
    //1: success :200

    if (res.statusCode == 200) //200-299 : denotes the response is formulated
        if (res.statusCode == 101) //100-199 : informational message
            if (res.statusCode == 301) //300-399 : redirection message
                if (res.statusCode == 400) // bad request: server cannot or will not process the request

                    console.log("i am succcessful")
})