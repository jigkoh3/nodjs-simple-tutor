var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('Server Ready...')
})

app.get('/api/test', (req,res)=>{
    res.jsonp({
        status : 200,
        data : {name: 'jigkoh'}
    });
})

app.listen(3000,()=>{
    console.log("server is start on port 3000");
})