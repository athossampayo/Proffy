const proffys = [{
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "982828899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    },
    {
        name: "Maria Antunes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "982828899",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            5
        ],
        time_from: [
            720
        ],
        time_to: [
            1220
        ]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNum) {
    return subjects[+subjectNum - 1]
}

function pageLanding(req, res) {
    return res.render(__dirname + "/views/index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render(__dirname + "/views/study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    if (Object.keys(data).length != 0) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect(__dirname + "/study")
    }
    return res.render(__dirname + "/views/give-classes.html", { subjects, weekdays })
}


const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


//config static files to /publics path
server.use(express.static("public"))
    //config app routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)