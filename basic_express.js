import express from 'express';

var app = express()

var server=app.listen(`8000`,(req,res)=>{
    var host=server.address().address
    var port=server.address().port
    console.log(host)
    console.log(port)
    console.log(`It is a working on ${port} and ${host}`)
})

app.get(`/`, (req, res) => {
    res.send(`Hi from Express`)
})