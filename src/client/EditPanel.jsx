import React from 'react'
import { WEB_PORT } from '../shared/config.js'

class EditPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.editArticle = this.editArticle.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  editArticle() {
    fetch(`http://localhost:${WEB_PORT}/api/article/${this.props.currentArticle._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        last_updated: Date.now()
      })
    })
    .then(res => res.json())
    .then(result => {
      alert(`Article ${this.props.currentArticle._id} updated`)
      console.log(result)
    })
    .catch(error => console.log(error))
  }

  deleteArticle(e) {
    fetch(`http://localhost:${WEB_PORT}/api/article/${this.props.currentArticle._id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(result => alert(`Article ${this.props.currentArticle._id} deleted`))
    .catch(error => console.log(error))
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  render() {
    const { currentArticle } = this.props
    return (
      <div>
        <h2>{currentArticle.title}</h2>
        <button onClick={this.deleteArticle} className="btn btn-medium btn-danger">
          Delete
        </button>

        <div>Last update: {currentArticle.last_updated}</div>
        <input
          className="form-control"
          onChange={this.onInputChange}
          type="text"
          name="title"
          placeholder="new title..."
        />
        <input
          className="form-control large-input"
          onChange={this.onInputChange}
          type="text"
          name="body"
          placeholder="new body..."
        />
        <button onClick={this.editArticle} className="btn btn-medium btn-success">
          Edit
        </button>
      </div>
    )
  }
}

export default EditPanel
