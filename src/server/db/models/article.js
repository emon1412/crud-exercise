import mongoose from 'mongoose'

const ArticleSchema = mongoose.Schema({
  title: { type: String, required: true, index: { unique: true } },
  body: { type: String, required: true },
  image: String,
  timestamp: { type: Date, default: Date.now }
})

const Article = mongoose.model('Article', ArticleSchema)

export default Article
