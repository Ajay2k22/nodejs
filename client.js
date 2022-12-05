import { MongoClient } from "mongodb"

const url = "mongodb://0.0.0.0:27017/"

export const connect = MongoClient.connect(url, (err, client) => {
    if (err) throw err
    console.log("Connected Sucessfully")
    client.close()

})



