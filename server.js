const express = require('express')
const path = require('path')
const params = require('./project-params.js')

const app = express()

// get static routings with views files
app.use(express.static(path.join(__dirname, 'public')))

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
        host: '195.78.66.4',
        user: 'korcz',
        pass: 'meMentomori00',
        port: 222
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

app.listen(params.PORT, () => console.log(`Server running on port ${params.PORT}`))