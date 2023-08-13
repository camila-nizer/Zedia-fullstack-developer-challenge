const express= require('express')
const app= express.Router()
const webScraping= require("./webScraping")

app.get('/findPhones/', webScraping.getPhones)

module.exports = app 