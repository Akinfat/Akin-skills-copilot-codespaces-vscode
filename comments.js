//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//create comments array
const comments = [
    {username: 'Tom', comment: 'Hello'}]

//create get request
app.get('/comments', (req, res) => {
    res.json(comments);
});

//create post request
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

//create put request
app.put('/comments/:index', (req, res) => {
    const {index} = req.params;
    const comment = req.body;
    comments[index] = comment;
    res.json(comment);
});

//create delete request
app.delete('/comments/:index', (req, res) => {
    const {index} = req.params;
    const deletedComment = comments.splice(index, 1);
    res.json(deletedComment);
});

//create listening port
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//run the server by using node comments.js
//use postman to test the