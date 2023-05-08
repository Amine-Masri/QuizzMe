//const { MongoClient } = require('mongodb');
// or as an es module:
const mongoose = require("mongoose")
 

// Connection URL
const dburl = 'mongodb+srv://amineelmasriinfo:Rodo7091@cluster0.br5xpwg.mongodb.net/?retryWrites=true&w=majority';

const ConnectionParams ={
useNewUrlParser: true,
useUnifiedTopology: true,
};

mongoose
.connect(dburl, ConnectionParams)
.then(()=>{
  console.info("Connected to DB")})
  .catch((e)=> {
    console.log("Error:",e);
  });

  