const router = require('express').Router()
const path = require('path');
const User = require('../model/User')
const { registerValidation } = require("./validation/validate")

router.post('/register', async (req, res) => {

    // Validate user before submit to DB
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // checking if the user is already in DB
    const emailExists = await User.findOne({email: req.body.email})
    if (emailExists) return res.status(400).send("Email already exists")

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try {

        const savedUser = await user.save()
        res.send(savedUser)

    } catch(err) {

        res.status(400).send(err)
    }
})

router.get('/login', async (req, res) => {
    
    // // validate user data
    // const { error } = loginValidation(req.body)
    // if (error) res.status(400).send(error.details[0].message)

    //     // check if email exists
    //     const user = await user.findOne({ email: req.body.email })
    //     if (!user) return res.status(400).send('Email is not found')

    //     // check if password is correct
    //     const validPassword = await bcrypt.compare(req.body.password, user.password)
    //     if (!validPassword) return res.status(400).send('Invalid password')

    // res.send(__dirname)
        res.render('auth/login')
})

router.post('/login', async (req, res) => {
    
    // // validate user data
    // const { error } = loginValidation(req.body)
    // if (error) res.status(400).send(error.details[0].message)

    //     // check if email exists
    //     const user = await user.findOne({ email: req.body.email })
    //     if (!user) return res.status(400).send('Email is not found')

    //     // check if password is correct
    //     const validPassword = await bcrypt.compare(req.body.password, user.password)
    //     if (!validPassword) return res.status(400).send('Invalid password')

    

    console.log('yolo from server')

    return res

})

module.exports = router