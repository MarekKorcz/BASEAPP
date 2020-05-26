// pushes variable from .env file to process.env
const dotenv = require('dotenv')
dotenv.config()

// init environment variable
const {
    APP_PORT, HOST, HOST_USER, HOST_PASS, HOST_PORT
} = process.env

const path = require('path')

// init express
const express = require('express')
const app = express()

// get static routings with views files
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

// auth routings 
const auth = require('./routes/auth')
app.use('/', auth)

// servers routings
const servers = require('./routes/servers')
app.use('/server', servers)

// get dynamic routings (like fetched ones)
app.use(express.json({ limit: '1mb' }))
app.post('/send-request-to-server', (req, res) => {

    var data = {
        serverMessage: 'Previous command did not return false',
        type: "error"
    }

    // switch it later with DB request where you will get server datas by serverName...
    // let serverData = req.body.serverName

    var SSH = require('simple-ssh')
 
    var ssh = new SSH({
        host: HOST,
        user: HOST_USER,
        pass: HOST_PASS,
        port: HOST_PORT
    })

    ssh
        // !!!!! begin from here after create RemoteApp and test scripts with timeout !!!!!
        .exec('cd innuendo; ls; exit 0;', {
            out: (stdout) => {

                data.serverMessage = stdout
                data.type = "success"

                res.json(data)
            }
        })
        .start()
})

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`))