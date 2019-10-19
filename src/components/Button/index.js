import React, { Component } from "react"
import "./index.css"

import PropTypes from "prop-types"

export default class Button extends Component {
  render() {
    const { text } = this.props
    return <button className="button-main-frame">{text}</button>
  }
}

Button.propTypes = {
  text: PropTypes.string
}
