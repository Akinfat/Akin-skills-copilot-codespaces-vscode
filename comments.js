//create web server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//parse json
app.use(bodyParser.json());

//create comments array
var comments = [
  { id: 1, author: "Adam", text: "Hello" },
  { id: 2, author: "Dave", text: "Howdy" },
  { id: 3, author: "Steve", text: "Hi" }
];

//get comments
app.get("/comments", function(req, res) {
  res.json(comments);
});

//add comments
app.post("/comments", function(req, res) {
  var newComment = {
    id: comments.length + 1,  };
});
