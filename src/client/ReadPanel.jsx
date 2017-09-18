import React from 'react'

class ReadPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.currentArticle.title}</h2>
        <span>Created:{this.props.currentArticle.create_at}</span>
        <br />
        <span>Last update:{this.props.currentArticle.last_updated}</span>
        <p>{this.props.currentArticle.body}</p>
      </div>
    )
  }
}

export default ReadPanel
