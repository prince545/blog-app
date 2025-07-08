const { Router } = require('express');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const router = Router();

router.use('/api/users', userRoutes);
router.use('/api/blogs', blogRoutes);

module.exports = router; 