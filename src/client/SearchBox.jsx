import React from 'react'

const SearchBox = (props) => (
  <div className="form-group">
    <label className="control-label">Title</label>
    <input
      onChange={props.searchTitle}
      type="text"
      className="form-control"
      placeholder="search and select article to read/edit"
    />
  </div>
)

export default SearchBox
