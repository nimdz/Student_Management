const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const app=express();
const path=require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {

  useNewUrlParser: true, 
  useUnifiedTopology: true,

  
  });

const connection=mongoose.connection;
connection.once("open",()=>{
   console.log("Mongodb connection success!")
})

const studentRouter=require("./routes/students.js");
app.use("/student",studentRouter);

app.listen(PORT,()=>{
  console.log(`Server is runing up and down on port ${PORT}`)
})