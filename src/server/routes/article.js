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

const router = express.Router()

router.route(ARTICLE_INDEX).get((req, res, next) => {
  Article
    .find({})
    .then((articles) => {
      const { title } = req.query
      const results = []
      if (title) {
        articles.forEach(item => {
          if (item.title.includes(title)) {
            results.push(item)
          }
        })
        res.status(201).json(results)
      }
      else {
        res.status(201).json(articles)
      }
    })
    .catch(next)
})

router.route(ARTICLE_SHOW).get((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Article
    .findById(id)
    .then((article) => {
      if (article) {
        res.json(article)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.post(ARTICLE_CREATE, (req, res, next) => {
  const article = new Article(Object.assign({}, req.body))

  article
    .save()
    .then((newArticle) => {
      res.status(201).json(newArticle)
    })
    .catch(next)
})

router.route(ARTICLE_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Article
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((article) => {
      if (article) {
        res.json(article)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})
router.route(ARTICLE_DELETE).delete((req, res, next) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Article
    .findById(id)
    .then((article) => {
      if (article) {
        article.remove()
        .then((deletedArticle) => {
          res.json(deletedArticle)
        })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
