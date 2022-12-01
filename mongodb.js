const mongoose = require('mongoose');

const url = `mongodb://0.0.0.0:27017`

const connection = async () => (
    await mongoose.connect(url, (err, res) => {
        if (err) {
            console.log(`unable to connect ${err}`)
        }

        else{
            console.log(`Connected Sucessfully`)
        }

    })
);

connection()

