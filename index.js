const express = require("express");
// const mongoose = require("mongoose");

// hCdRg4TEjrMK8yvz
// mongodb+srv://aimadedreggab:<db_password>@cluster0.hiwuyok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose =require("mongoose");

const Article = require("./modules/Article");

mongoose.connect("mongodb+srv://aimadedreggab:hCdRg4TEjrMK8yvz@cluster0.hiwuyok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connect");
} ).catch((error) =>{
    console.log("error",error);
});

const app = express();
const path = require('path');
app.use(express.json());

app.get("/hello", (a,b) => {
 b.send("helooo");
}  );

app.get("/aimo", (a,b) => {

//     b.sendFile(path.join(__dirname,'home.html'));
// //  b.send(path.join(__dirname,'home.html'));
b.render("home.ejs"  ,{
    name:a.body.name,
});
}  );

app.post("/po/:nb1/:nb2", (a,b) => {
    const c = a.params.nb1;
    const f = a.body.name;
 b.send(`apoo ${f} `);
}  );
app.post("/articles",async (a,b) => {
   const newArticle = new Article();

   const artName= a.body.name;
   const artTitel= a.body.title;


   newArticle.title =artTitel;
   newArticle.body =artName;
 
   newArticle.Numberoflink =100;
  await newArticle.save();

   
     
//  b.send("artivles has been stored");
b.json(newArticle);
}  );

app.get("/articles/:idqrticle", async (req, res)=> {
const id = req.params.idqrticle;
const articles =await Article.findById(id);
// const articles =await Article.find();
res.json(articles);

});

app.delete("/articles/:idqrticle", async (req, res)=> {
const id = req.params.idqrticle;
const articles =await Article.findByIdAndDelete(id);
// const articles =await Article.find();
res.json(articles);
 
});

app.get("/showarticles", async (req, res)=> {

 const articles =await Article.find();


// res.json(articles);
res.render("show.ejs",{
    allart:articles,
});

});

// app.get("/aimo", (a,b) => {

// //     b.sendFile(path.join(__dirname,'home.html'));
// // //  b.send(path.join(__dirname,'home.html'));
// b.render("home.ejs"  ,{
//     name:a.body.name,
// });
// }  );

app.listen(3000, () => {
    console.log("I am in 30000");
});
