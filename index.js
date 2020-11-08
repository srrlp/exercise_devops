const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const item = [
    { id: 1, name: 'iphone 12' },
    { id: 2, name: 'Nokia 3310' }
]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/item', (req, res) => {
    return res.send(item)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app