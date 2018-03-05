const express   =require("express"),
      bodyParser=require("body-parser"),
      mongoose  =require("mongoose"),
      morgan    =require("morgan"),
      cors      =require("cors");

var config=require("../config");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());

mongoose.connect(config.database, err=>{
  if (err){
    console.log("error in connecting to mongoDB "+ (err));
  }
  else{
    console.log("COnnection to mongoDb is successful");
  }
});

app.get("/", function(req,res,next){
  res.send("index page this is")
});

app.listen(config.port, err=>{
  console.log("the server has started at "+ config.port)
})
