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
        console.log(userData)
        res.status(200).json(userData)
    } catch(err) {
        // throw error is true so client side knows how to handle
        res.status(400).json({ message: 'Error is true', err: true})
    }
});

// verify & login
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user with that email'})
        }
    
        res.status(200).json(userData)

    } catch (err) {
        res.status(400).json({ message: 'Error found', err: true})
    }
})

// verify & login
router.post('/login', async (req, res) => {
    try {
        const validateUserEmail = req.body.email;
        const userEmail = await User.findOne({where: {email: validateUserEmail}})
        if (!userEmail) {
            res.status(404).json({ message: 'No user with that email'})
        }
        
        // let decryptPassword = await bcrypt.compare(userData.password, req.body.password)
        // console.log(decryptPassword)
        res.status(200).json(userEmail)

    } catch (err) {
        res.status(400).json({ message: 'Error found', err: true})
    }
})


module.exports = router;

