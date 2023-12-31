const router = require('express').Router();
// will refer to the folder called api
const userRoutes = require('./userRoutes');
// any fetch call started w /api will be sent to api folder
router.use('/users', userRoutes);


const loggedInRoutes = require('./loggedInRoutes');
router.use('/loggedIn', loggedInRoutes);

// to use in other files
module.exports = router;