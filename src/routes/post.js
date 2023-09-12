//post.route.js //
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller'); // Import your controller module here

// Define the route for creating a new post
router.post('/posts', PostController.createPost);


module.exports = router;

