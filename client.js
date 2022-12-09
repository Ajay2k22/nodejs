var response = require('./hw')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send(response)
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(`Listening on ${port}`)
})