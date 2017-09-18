import React from 'react'
import ArticleList from './ArticleList'
import SearchBox from './SearchBox'
import MainPanel from './MainPanel'
import { WEB_PORT } from '../shared/config.js'
import { Col } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      currentArticle: {}
    }

    this.selectArticle = this.selectArticle.bind(this)
    this.searchTitle = this.searchTitle.bind(this)
  }

  searchTitle(e) {
    const url = `http://localhost:${WEB_PORT}/api/article?title=${e.target.value}`
    fetch(url)
      .then(res => res.json())
      .then(articles => {
        this.setState({ articles: articles })
      })
  }

  selectArticle(article) {
    this.setState({ currentArticle: article })
  }

  render() {
    return (
      <div>
        <Col lg={8} md={8} sm={8}>
          <MainPanel currentArticle={this.state.currentArticle} />
        </Col>

        <Col lg={4} md={4} sm={4}>
          <SearchBox searchTitle={this.searchTitle} />
          <ArticleList articles={this.state.articles} selectArticle={this.selectArticle} />
        </Col>
      </div>
    )
  }
}

export default App
