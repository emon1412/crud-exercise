import React from 'react'
import ArticleEntry from './ArticleEntry'

const ArticleList = ({articles, selectArticle}) => (
  <div>
    {articles.map((item, i) =>
      <ArticleEntry key={i} article={item} selectArticle={selectArticle}/>
    )}
  </div>
)

export default ArticleList
