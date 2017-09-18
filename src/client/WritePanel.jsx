import React from 'react'
import { WEB_PORT } from '../shared/config.js'

class WritePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.addArticle = this.addArticle.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  addArticle() {
    fetch(`http://localhost:${WEB_PORT}/api/article`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
      })
    })
    .then(res => res.json())
    .then(result => alert(`New article added`))
    .catch(error => console.log(error))
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label">Title</label>
        <input
          className="form-control"
          onChange={this.onInputChange}
          type="text"
          name="title"
          // value={currentArticle.title}
        />
        <label className="control-label">Body</label>
        <input
          className="form-control"
          onChange={this.onInputChange}
          type="text"
          name="body"
          // value={currentArticle.body}
        />
        <button onClick={this.addArticle} className="btn btn-medium btn-success">
          Add article
        </button>
      </div>
    )
  }
}

export default WritePanel
