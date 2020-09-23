require('dotenv').config({path:'./.env'})
const express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    mongoClient = require("mongoose");

mongoClient.connect("mongodb://localhost:27017/hocvien",{useNewUrlParser: true,useUnifiedTopology:true});


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routeHocVien = require('./API/routes/hocvienRoute');
routeHocVien(app);


app.use((req,res)=>{
    res.status(404).send({url: req.originalUrl + 'not Found!!!'})
})
app.listen(port,()=>console.log('Server RESful is startes with : ',port,' port...'));