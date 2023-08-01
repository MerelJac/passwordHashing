const router = require('express').Router();
// npm install bcrypt for password hashing
const bcrypt = require('bcrypt');
// install the path to the sql js file
const User = require('../../models/Users');


// create a new User 
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        // hash the password
        newUser.password = await bcrypt.hash(req.body.password, 10);
        // create newUser w the hashed password and save to DB
        const userData = await User.create(newUser);
        res.status(200).json(userData)
    } catch(err) {
        // throw error is true so client side knows how to handle
        res.status(400).json({ message: 'Error is true', err: true})
    }
});

module.exports = router;
