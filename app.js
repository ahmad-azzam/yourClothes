const express = require('express')
const router = require('./routers/index');
const app = express()
const port = 3000
const path = require('path')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/login', express.static(path.join(__dirname, 'public/login')))
app.use('/dashboard', express.static(path.join(__dirname, 'public/dashboard')))
app.use('/', router)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})