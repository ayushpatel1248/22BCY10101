const express = require("express")
var bodyParser = require('body-parser')
var cors = require("cors");

//-------------------------------------------------------
const app = express()
app.use(cors())


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// testing route
const test = require("./routes/test")
app.use("/test",test)

//this is users route 
const users = require("./routes/users")
app.use("/",users)


app.listen(9999, ()=>{
  console.log("server is running on port : ", 9999)
});