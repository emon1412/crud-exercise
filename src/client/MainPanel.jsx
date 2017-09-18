import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import ReadPanel from './ReadPanel'
import EditPanel from './EditPanel'
import WritePanel from './WritePanel'

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Tabs justified defaultActiveKey={1} animation={true} id="nav">
        <Tab eventKey={1} title="Read">
          <ReadPanel currentArticle={this.props.currentArticle} />
        </Tab>
        <Tab eventKey={2} title="Edit">
          <EditPanel currentArticle={this.props.currentArticle} />
        </Tab>
        <Tab eventKey={3} title="Write">
          <WritePanel currentArticle={this.props.currentArticle} />
        </Tab>
      </Tabs>
      </div>
    )
  }
}

export default MainPanel
