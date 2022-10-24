const express = require("express");
const mongoose =require("mongoose");
const cors= require("cors");//prement de partager les ressource dans des déffrent origine
//exemple : localhost:3000 et localhost3030 sont deux orgine different



const PORT=3030;
const app = express();
const totdoRoutes = require("./routes/todoRoutes");

app.use(express.json());//prendre une requette et convertir en json
app.use(cors());

 mongoose.connect("mongodb+srv://hanibj:51785525@todoliste.tymplul.mongodb.net/todoliste?retryWrites=true&w=majority")
     .then(()=> console.log("connected"))
     .catch((err)=> console.error(err));

app.use("/todos/", totdoRoutes);
     

app.listen (PORT , ()=>  {
   console.log ("the serveur is listen" + PORT);





});