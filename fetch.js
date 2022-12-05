import { MongoClient } from 'mongodb'

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
    if (err) { throw err }
    console.log("Connected Successfully")

    const db = client.db("Employees")
    // console.log(db)

    // db.collection('employee').updateOne({ "name": "Shahrukh" }, { $set: { "salary": 40000 } }, (err, res) => {
    //     if (err) throw err
    //     console.log("Sucessfully updated")

    // })

    db.collection('employee').updateOne({ "name": "Shahrukh" }, { $set: { "age": 100 } },
        (err, res) => {
            if (err) throw err
            console.log("Sucessfully updated");


        })

    db.collection("employee").findOne({ "name": "Shahrukh" }, function (err, res) {
        if (err) throw err
        console.log(res)
        
    })

    db.collection("employee").find({}).toArray(function(err,res){
        if (err) throw err
        console.log(res)
        client.close()
    })
})