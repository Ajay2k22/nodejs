const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";

const connect = MongoClient.connect(url, function (err, client) {
    if (err) throw err
    console.log("Connected Sucessfully")
    const db = client.db("Employee")
    var newkey = db.collection('emp').findOne({}, async (err, res) => {
        if (err) throw err
        console.log('fetched data sucessfully')
        console.log(res);
        response.firstname = await res.name;
        response.age = await res.age;
        response.salary = await res.Salary;
        console.log(response)
        client.close()
    });
});

connect

var response = {
    firstname: "",
    age:"",
    salary: ""
}
module.exports = response;