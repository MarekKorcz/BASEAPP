const router = require('express').Router()
var path = require('path');
// const User = require('../model/User')

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
        res.sendFile(path.resolve('public/login.html'))
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



})

module.exports = router