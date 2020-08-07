


const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')

//config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//config static files to /publics path
server
//receive data from req.body
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
    //config app routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)