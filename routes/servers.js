const router = require('express').Router()
const authorization = require('../middleware/authorization')

router.get('/list', authorization, (req, res) => {

    res.render('server/list')
})

module.exports = router