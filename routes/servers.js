const router = require('express').Router()
const verify = require('./validation/verifyToken')

router.get('/list', verify, (req, res) => {

    res.render('server/list')
})

module.exports = router