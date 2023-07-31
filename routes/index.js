const router = require('express').Router();
// will refer to the folder called api
const apiRoutes = require('./api');
// any fetch call started w /api will be sent to api folder
router.use('/api', apiRoutes);
// to use in other files
module.exports = router;