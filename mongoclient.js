import { MongoClient } from 'mongodb'

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
    if (err) { throw err }
    console.log("Connected Successfully")

    const db = client.db("mydb")
    // console.log(db)
    db.collection("employees").findOne({ "salary": 40000 }, function (err, res) {
        if (err) throw err
        console.log(res)
        client.close()
    })
})