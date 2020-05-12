const express = require('express')
const params = require('./project-params.js')

const app = express()
const PORT = process.env.PORT | params.PORT

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ]

    res.json(customers)
})

app.listen(params.PORT, () => console.log(`Server running on port ${params.PORT}`))