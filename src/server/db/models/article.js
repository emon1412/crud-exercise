import mongoose from 'mongoose'

const ArticleSchema = mongoose.Schema({
  title: { type: String, required: true, index: { unique: true } },
  body: { type: String, required: true },
  image: String,
  create_at: { type: Date, default: Date.now() },
  last_updated: { type: Date }
})

const Article = mongoose.model('Article', ArticleSchema)

export default Article
