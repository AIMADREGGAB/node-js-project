const mongoose =require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({

    title: String,
    body: String,
    Numberoflink : Number
})


const Articl = mongoose.model("Article", articleSchema);
module.exports = Articl;


