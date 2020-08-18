const router = require('express').Router()
const authorization = require('../middleware/authorization')

router.get('/list', authorization, (req, res) => {

    // res.send(req.cookies)

    res.render('server/list')
})

module.exports = router