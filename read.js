const fs=require("fs");
// it includes fs modules 

// 1.first argument path
// 2.second argument encoding
// 3.third argument callback
fs.readFile("demo.txt","utf8",(err,data)=>{
    if (err){
        // if error occur then this line will get execute
        console.log(err)
    }
    // otherwise data will print
    console.log(data)
});
