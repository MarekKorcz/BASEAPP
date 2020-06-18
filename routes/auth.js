const router = require('express').Router()
const path = require('path');
const User = require('../model/User')
const { registerAndLoginValidation } = require("./validation/validate")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = process.env

router.post('/register', async (req, res) => {

    // Validate user before submit to DB
    const { error } = registerAndLoginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // checking if the user is already in DB
    const userExists = await User.findOne({name: req.body.name})
    if (userExists) return res.status(400).send("User already exists")



    // generate salt
    const salt = await bcrypt.genSalt(10)

    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        password: hashedPassword
    })

    try {

        const savedUser = await user.save()
        res.send(savedUser)

    } catch(err) {

        res.status(400).send(err)
    }
})

router.get('/login', (req, res) => {

    res.render('auth/login')
})

router.post('/login', async (req, res) => {
    
    // validate user data
    const { error } = registerAndLoginValidation(req.body)
    if (error) res.status(400).send(error.details[0].message)

    // check if user exists
    const user = await User.findOne({ name: req.body.name })
    if (!user) return res.status(400).send('User is not found')

    // check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid password')



    // create and assign a token
    const token = jwt.sign({_id: user._id}, TOKEN_SECRET, {expiresIn: '1d'})
    res.header('auth-token', token)

    res.send(token)
    // res.send('Logged in!')
})

module.exports = router