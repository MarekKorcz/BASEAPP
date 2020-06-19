const router = require('express').Router()
const verifyToken = require('./validation/verifyToken')

router.get('/list', verifyToken, (req, res) => {

    res.render('server/list')
})

module.exports = router