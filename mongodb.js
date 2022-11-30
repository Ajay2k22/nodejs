const mongoose =require('mongoose');

const url=`mongodb://0.0.0.0:27017`

const connection= async ()=>(
    await mongoose.connect(url,(err)=>{
        if (err){
            console.log(`unable to connect ${err}`)
        }
        else{
            console.log(`Connected Sucessfully`)
        }
    })
    
    
);
const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    salary: Number
})

const mymodel = mongoose.model('Employees', UserSchema)

const emp=new mymodel({
    "name":"max",
    "age":22,
    "salary":54309
})
console.log(emp.name)
console.log(emp)



