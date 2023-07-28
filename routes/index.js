const router = require('express').Router();
// will refer to the folder called api
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;