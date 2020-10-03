//jshint esversion:6

const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");

//intializing express
const app = express();

//view ejs as templating engine
app.set("view engine", 'ejs');

//use bodyParser() for parsing request.
app.use(bodyParser.urlencoded({extended:true}))

//to use public directory to store static css, img etc
app.use(express.static("public"));

// setting up mongoDB Server 
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true, useUnifiedTopology: true});

//creating mongoose schema
const articleSchema = {
    title: String,
    content: String
}

//creating mongoose Model (name is in singular form with first letter capitalized in model name)
const Article = mongoose.model("Article",articleSchema);


/*               Request targeting all the articles                          */

//refactored code 
app.route("/articles")

    .get(function(req,res){
        Article.find(function(err,foundArticles){
        if(!err){
        res.send(foundArticles);
            } else{
        res.send(err);
    }       
  })
})
    .post(function(req,res){
        console.log(req.body.title);
        console.log(req.body.content);

        const newArticle = new Article({
            title: req.body.tilte,
            content: req.body.content
    })
        newArticle.save(function(err){
            if(!err){
            res.send("Successfully added a new article")
        } else{
            res.send(err);
        }
        })
})
    .delete(function(req,res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("Successfully deleted all the artcles");
            }else{
                res.send(err);
        }
    })
}); //use semicolon here to make sure this app.route is complete

//-------------------------------------------------------------------------------------/

/*               Request targeting specific article                         */
//-------------------------------------------------------------------------------------/
app.route("/articles/:articleTitle")

    .get(function(req,res){
// we are only getting only one article so foundArticle
    Article.findOneAndUpdate({title: req.params.articleTitle}, function(err, foundArticle){ 

    if (foundArticle){
        res.send(foundArticle);
    } else {
        res.send("No matching articles with the title was found.");
    }
});
}) //replace particlular document 

    .put(function(req,res){
        Article.update(
    // specifies which article to update
        {title: req.params.articleTitle},
        {title: req.body.title,
         content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article");
         }
        }
    );
})

    .patch(function(req,res){

        Article.update(
            {title:req.params.articleTitle},
            {$set: req.body},
            function(err){
                if(!err){ 
                res.send("Successfully updated article");
            } else {
                res.send(err);
                
            }
        }
    )
})

    .delete(function(req,res){
        Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if(err){
                    res.send(err);
    } else{
        res.send("Successfully deleted");
        }
    }
)

});

//server setup
app.listen(3000, function(){
console.log("Server started on port 3000");
})
