import mongoose from 'mongoose'
import { MONGODB_URI } from '../../shared/config.js'

const options = {
  useMongoClient: true
}

mongoose.connect(MONGODB_URI, options)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Mongodb connection open')
})

export default db
