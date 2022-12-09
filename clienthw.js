// var response = require('./serverhw')
import response from './serverhw';
// var express = require('express');
import express from 'express';
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/users', function (req, res) {
    res.send(response)
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(`Listening on ${port}`)
})