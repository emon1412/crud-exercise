import compression from 'compression'
import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'

import articleRoute from './routes/article.js'
import Article from './db/models/article.js'
import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config.js'
import { isProd } from '../shared/util'
import renderApp from './render-app'
import './db/db.js'

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME))
})

app.use('/api', articleRoute)

// app.get('/article', (req, res) => {
//   Article
//     .find({})
//     .then(item => {
//       console.log(item)
//     })
//   // res.send('here')
// })
//
// app.post('/article', (req, res) => {
//   const article = new Article({
//     title: 'example title 5',
//     body: 'example body'
//   })
//   article
//     .save()
//     .then(item => {
//       // console.log(item)
//       console.log('@@@@@@@@@@@@@@@@@@@@@@@@\n', req.body)
//     })
//     .catch(error => console.log(error))
//   // res.send('here')
// })



app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development)'}.`)
})
