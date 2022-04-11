const express = require('express')
const Api = require('./models/countryInternetObject')
const countryInternetRouter = express.Router()

countryInternetRouter.get("/", async (req, res) => {
  try {
    const data = await Api.getAll()
    console.log('executed get all function')
    return res.send(data)
  } catch (err) {
    console.error(err)
    // handle error 
  }
})

countryInternetRouter.get("/year/:year", async (req, res) => {
  try {
    const data = await Api.filterBy({ year: req.params.year })
    console.log('executed filter function')
    return res.send(data)
  } catch (err) {
    console.error(err)
    // handle error 
  }
})

module.exports = countryInternetRouter