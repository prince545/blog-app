const { Router } = require('express');
const blogController = require('../controllers/blogController');
const auth = require('../middleware/auth');
const router = Router();

// Public
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);

// Protected
router.post('/', auth, blogController.createBlog);
router.put('/:id', auth, blogController.updateBlog);
router.delete('/:id', auth, blogController.deleteBlog);

module.exports = router; 