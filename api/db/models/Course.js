const mongoose = require('mongoose')

const schema = {
  title: String,
}

module.exports = mongoose.model('Course', schema)
