import mongoose from 'mongoose'
import express from 'express'

import Article from '../db/models/article.js'
import {
  ARTICLE_INDEX,
  ARTICLE_CREATE,
  ARTICLE_SHOW,
  ARTICLE_UPDATE,
  ARTICLE_DELETE
} from '../../shared/routes.js'

const router = express.router()

router.route(ARTICLE_INDEX).get((req, res, next) => {
  Article
    .find({})
    .then((articles) => {
      res.json(articles)
    })
    .catch(next)
})
