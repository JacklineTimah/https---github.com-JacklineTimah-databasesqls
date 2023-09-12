//post.controller.js //
const PostService = require('../services/post.service'); // Import your service module here

// Create a new post
const createPost = async (req, res, next) => {
  try {
    const { title, text, user_id } = req.body;

    // Call the service to add a new post
    const newPost = await PostService.addPost({ title, text, user_id });

    // Return the newly added post in the response
    res.status(201).json({
      status: 'success',
      message: 'Post created successfully',
      data: newPost,
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

module.exports = {
  createPost,
};