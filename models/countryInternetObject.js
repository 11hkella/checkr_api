const mongoose = require('./connection')

const schema = new mongoose.Schema({
  region: String,
  year: Number,
  percentage: Number,
  source: String
})

const model = mongoose.model('CountryInternetObject', schema)

const getAll = () => {
  return model.find({})
}

const insertMany = (records) => {
  return model.insertMany(records)
}

const filterBy = (filter) => {
  return model.find(filter)
}

module.exports = {
  getAll,
  insertMany,
  filterBy
}