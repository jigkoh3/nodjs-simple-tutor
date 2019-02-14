var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('Server Ready...')
})

app.listen(3000,()=>{
    console.log("server is start on port 3000");
})