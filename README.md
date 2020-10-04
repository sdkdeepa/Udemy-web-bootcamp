# Udemy-web-bootcamp

- https://www.codeply.com/u/sdk_deepa - My codeply 

### Angela Yu's Github pages

- https://github.com/londonappbrewery/Build-Your-Own-RESTful-API#server-starting-code
- https://github.com/londonappbrewery/Authentication-Secrets


Some important links

- https://www.appbrewery.co/p/web-development-course-resources - this has ton of very useful links
- https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf
- https://colorhunt.co/ - color pallete 
- https://unicode-table.com/en/ - unicode table
- markusvogl.com/web1/interactive_box_model/css_box_demo.html - to see the box model (works only on Firefox)
- https://www.favicon.cc/ - to create your favorite icon on the tabs 
- http://seanhalpin.io/ - beautiful example of a resume website
- https://www.frontendmentor.io/challenges - where you can practice challenges
- https://color.adobe.com/create/color-wheel - Adobe color wheel
- https://www.cssfontstack.com/ - popular fonts used 
- https://fonts.google.com - get the embedded link to copy in your html document.






- https://docs.emmet.io/cheat-sheet/
- https://lodash.com/ - loadash
- https://mongoosejs.com/docs/models.html
- How body parser works - https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
- https://expressjs.com/en/guide/routing.html - express js app routing 
- https://github.com/londonappbrewery/Build-Your-Own-RESTful-API - Angela's build your own restful API
- https://cryptii.com/ - basic encryption ceaser cipher
- https://www.npmjs.com/package/mongoose-encryption - Mongoose encryption
- https://www.npmjs.com/package/dotenv - dotenv package

- Google OAuth - http://www.passportjs.org/packages/passport-google-oauth20/



![Image of google font selection](/Users/deepa/Desktop/Google-fonts.png)

Google chrome extensions:
- Pesticide
- JSON viewer awesome

### Packages to be installed 
Check before installing the packages

``` 
npm init

npm i express ejs body-parser mongoose

```
To install monogoose encryption

```
npm i mongoose-encrytion
```
To install Dotenv
```
npm i  dotenv
```

To install bcrypt
```
npm i bycrypt

//make sure you have the stable node version

```

To install passport
```
npm i passport passport-local passport-local-mongoose express-session

```

### Server starting code

```
//jshint esversion:6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```
