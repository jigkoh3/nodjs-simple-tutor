var express = require('express');
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Server Ready...')
})

app.get('/api/test', (req,res)=>{
    res.jsonp({
        status : 200,
        data : {name: 'jigkoh'}
    });
})

app.get('/api/test/:id', (req,res)=>{
    res.jsonp({
        status: 200,
        data: req.id
    });
})

app.put('/api/test/:id', (req,res)=>{
    res.jsonp({
        status:200,
        data:{
            message : `updatedata at ${req.id} success...`
        }
    })
})

app.delete('/api/test/:id',(req,res)=>{
    res.jsonp({
        status:200,
        data:{
            message : `delete data at ${req.id} success...`
        }
    })
})

app.param('id',(req,res,next, id)=>{
    req.id = id;
    next();
})

app.post('/api/test', (req,res)=>{
    //ไม่สามารถอ่าน request body ที่เป็น JSON ได้จึงไม่สามารถ respons json ได้
    //วิธีแก้ไขคือใช้ body-parser middleware มาช่วย
    res.jsonp(req.body);
})



app.listen(3000,()=>{
    console.log("server is start on port 3000");
})