const express = require('express');
const api = express.Router();
const users = require('../../routes/user');
const books = require('../../routes/post');

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to My Books App API'
}))

api.use("/users", users);
api.use("/posts", books);


module.exports = api