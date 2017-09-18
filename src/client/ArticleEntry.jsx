import React from 'react'
import ArticleList from './ArticleList'
const ArticleEntry = ({ article, selectArticle }) => (
  <div onClick={() => selectArticle(article)}>
    <h2>{article.title}</h2>
    <p>{article.body}</p>
  </div>
)

export default ArticleEntry
