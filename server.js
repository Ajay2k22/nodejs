var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (req, res) {
    fs.readFile("demo.txt", (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            return res.end("404 not found")
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
}).listen(8080)