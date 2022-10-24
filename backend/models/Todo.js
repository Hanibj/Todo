const mongoose =require("mongoose");//un model de notre todo pour suivre le schema que nous avons créer

//creation d'un schema
//new mongosse.schema parsque schema est une class de mongosse librerie
const TodoSchema= new  mongoose.Schema({
    title: String,
    completed:Boolean
});
module.exports = mongoose.model ("Todo", TodoSchema); //Todo <=> todos dans mongoose