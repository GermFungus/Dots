
var express = require("express");
var app  = express();
var path = require("path");
var IndexRouter = require('./index');
var cors = require('cors');
var fileupload = require('express-fileupload');
app.use(fileupload());
app.use(cors());
app.use(express.static(path.join(__dirname,"static-portfolio")));
app.use( '/images' , express.static(path.join(__dirname,"static-portfolio/assets/images")));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/', IndexRouter);
module.exports = app;