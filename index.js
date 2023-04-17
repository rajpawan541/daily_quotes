const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
const start = async()=>{
    try{
        app.listen(5000,()=>{
            console.log("i am listing")
        })
    }catch(error){}
}

start()