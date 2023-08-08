const router = require('express').Router();



router.get('/',  (req, res) => {
    console.log('this is a test of loggedIn route', req.session)
    res.render('all', { username: req.session.username })   
});


module.exports = router;

