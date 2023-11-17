const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3400
const fs = require('fs').promises

const app = express()

app.use(cors())

app.use(express.static('public'))
app.use('/image', express.static('images'))

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})