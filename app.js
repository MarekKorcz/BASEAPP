// init environment variables
const {
    DB, DB_NAME, DB_PORT, DB_APP_NAME, APP_PORT
} = process.env

// connect to db
const mongoose = require('mongoose')
mongoose
    .connect(`${DB}://${DB_NAME}:${DB_PORT}/${DB_APP_NAME}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connected to DB'))
    .catch(error => console.log(error))


    
// init express
const express = require('express')
const app = express()

// view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.json())

// get static routings with views files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

const cookieParser = require('cookie-parser')
app.use(cookieParser());

// get dynamic routings (like fetched ones)
app.use(express.json({ limit: '1mb' }))



// auth routings 
const auth = require('./routes/auth')
app.use('/', auth)

// servers routings
const servers = require('./routes/servers')
app.use('/server', servers)



// app.post('/send-request-to-server', (req, res) => {

//     var data = {
//         serverMessage: 'Previous command did not return false',
//         type: "error"
//     }

//     // switch it later with DB request where you will get server datas by serverName...
//     // let serverData = req.body.serverName

//     var SSH = require('simple-ssh')
 
//     var ssh = new SSH({
//         host: HOST,
//         user: HOST_USER,
//         pass: HOST_PASS,
//         port: HOST_PORT
//     })

//     ssh
//         // !!!!! begin from here after create RemoteApp and test scripts with timeout !!!!!
//         .exec('cd innuendo; ls; exit 0;', {
//             out: (stdout) => {

//                 data.serverMessage = stdout
//                 data.type = "success"

//                 res.json(data)
//             }
//         })
//         .start()
// })

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`))