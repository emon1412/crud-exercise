import mongoose from 'mongoose'
import { MONGODB_URI } from '../shared/config.js'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.on('open', function () {
  console.log('Mongodb connection open')
})

module.exports = db
