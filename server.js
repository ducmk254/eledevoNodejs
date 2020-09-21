const express = require('express'),
      app = express(),
      port = process.env.PORT || 3001,
      bodyParse = require('body-parser'),
      morgan = require('morgan'),
      mongoClient = require('mongoose'),
      pug = require('pug')
mongoClient.connect("mongodb://localhost:27017/users",{useNewUrlParser:true,useUnifiedTopology: true})
app.use(morgan('dev'))
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json())

app.set('view engine','pug')
app.set('views','./API/views')

const routes = require('./API/routes/usersRoute')
const routesIndex = require('./API/routes/indexRoute')
routesIndex(app);
routes(app);




app.use((req,res)=>{
    res.status(404).send({url:req.originalUrl + ' not Found!!!!!!'})
})
app.listen(port,()=>{
    console.log('Server started with : ',port,' port');
});