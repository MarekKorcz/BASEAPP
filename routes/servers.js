const router = require('express').Router()
const path = require('path')

router.get('/list', (req, res) => {

    res.render('server/list')
})

module.exports = router