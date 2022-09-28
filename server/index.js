// require('dotenv').config()
const express = require('express')
const app = new express()
// const ejs = require('ejs')
const flash = require('connect-flash');
const expressSession = require('express-session');
const fileUpload = require('express-fileupload')
const db = require('./config/db')
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
// app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(expressSession({
    secret: 'beauty101',
    saveUninitialized: false,
    resave: true
}));

app.use(flash())
const admin = require('./routes/admin');
const blog = require('./routes/blog');

app.use('/admin',admin);
app.use('blog',blog)


db()
app.listen(3000, () => {
    console.log('App listening on port 3000')
})

