const express = require('express')
const path = require('path')
const params = require('./project-params.js')

const app = express()

// get static routings with views files
app.use(express.static(path.join(__dirname, 'public')))

// get dynamic routings (like fetched ones)
app.use(express.json({ limit: '1mb' }))
app.post('/send-request-to-server', (req, res) => {

    console.log(req.body)

    const data = {
        type: "success", 
        serverName: req.body.serverName
    }

    res.json(data)













    // switch it later with DB request where you will get server datas by serverName...
    // let serverName = '195.78.66.4'

    
    
//     var SSH = require('simple-ssh');
 
//     var ssh = new SSH({
//         host: '195.78.66.4',
//         user: 'korcz',
//         pass: 'meMentomori00',
//         port: 222
//     })

//     ssh
//         .exec('cd innuendo; ls', {
//             out: function(stdout) {
//                 console.log(stdout);
//             }
//         })
//         .exec('exit 0', {
//             exit: function() {
//                 console.log('Previous command did not return false');
//             }
//         })
//         .start()
})

app.listen(params.PORT, () => console.log(`Server running on port ${params.PORT}`))