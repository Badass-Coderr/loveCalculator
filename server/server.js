// modules

const fs = require("fs");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
require("./js_modules/percent_lc.js")();

// paths

const publicDirectory = path.join(__dirname,"/../public");
const viewsDirectory = path.join(__dirname,"/../templates/views");
const partialsDirectory = path.join(__dirname,"/../templates/partials");

// express setup

const app = express();
app.use(express.static(publicDirectory));

// hbs setup

app.set('view engine','hbs');
app.set('views',viewsDirectory)
hbs.registerPartials(partialsDirectory);

//bodyParser setup

app.use(bodyParser.urlencoded({extended: true}));

//File reading
let rawData = fs.readFileSync("./description.json");
let description = JSON.parse(rawData);
console.log("Server has started at port 3000 ........");

// Routes

app.get('/',(req,res) => {
    res.render("index",{
        title : "Calculate the percentage"
    });
});

app.post('/',(req,res) => {
    console.log(req.body);
    let name1 = req.body.name_1,
        name2 = req.body.name_2;
    let result = percent(name1,name2);
    let resultDesc;
    if(result < 25)
        resultDesc = description[0].desc;
    else if(result <50)
        resultDesc = description[1].desc;
    else if(result <75)
        resultDesc = description[2].desc;
    else
        resultDesc = description[3].desc;
    res.render("percent",{
        title : "Score",
        score : result + "%",
        desc : resultDesc
    });
});

app.listen(3000);