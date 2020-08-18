const router = require('express').Router()
const authorization = require('../middleware/authorization')
const Server = require('../model/Server')

router.get('/list', authorization, async (req, res) => {

    // console.log(await Server.find())

    res.render('server/list', {
        'servers': await Server.find()
    })
})

router.get('/create', authorization, (req, res) => {

    res.render('server/create')
})

router.post('/create', authorization, async (req, res) => {

    let data = {
        status: 'error'
    }

    let {host, user, port, password} = req.body

    if (host, user, port, password) {

        let server = await Server.create({
            host: host,
            user: user, 
            port: port,
            password: password
        })

        data.status = 'success'
    }
    
    res.send(data)
})

module.exports = router