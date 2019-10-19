import React, { Component } from "react"
import "./index.css"
import PropTypes from "prop-types"

export default class CategoryItem extends Component {
  render() {
    const { text } = this.props
    return (
      <div className="main-category-container">
        <img src={this.props.image} alt="kupa" className="image-main" />
        <div className="category-text">{text}</div>
      </div>
    )
  }
}

CategoryItem.propTypes = {
  text: PropTypes.string
}
