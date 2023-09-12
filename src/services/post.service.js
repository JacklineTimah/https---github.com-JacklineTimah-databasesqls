//post.service.js//
const { addPost,} = require('../queries/posts');
const { runQuery } = require('../config/database.config');

/// Import any necessary modules or database connections here

// Add a new post
const addNewPost = async (body) => {
    try {
      const { title, text, user_id } = body;
  
      // Perform any necessary validation here
  
      // Insert the new post into the database using your database library
      const newPost = await db.one(
        'INSERT INTO posts(title, text, user_id) VALUES ($1, $2, $3) RETURNING *',
        [title, text, user_id]
      );
  
      return newPost;
    } catch (error) {
      // Handle any errors, e.g., database errors or validation errors
      throw error;
    }
  };
  
  module.exports = {
    addPost,addNewPost
  };
  
