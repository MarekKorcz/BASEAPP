const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = process.env

module.exports = (req, res, next) => {

    // verify if token exists
    const token = req.cookies.token
    
    if (!token) 
        return res.status(401).send('Access Denied')

    try {

        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        next()

    } catch(error) {

        req.status(400).send('Invalid Token')
    }
}