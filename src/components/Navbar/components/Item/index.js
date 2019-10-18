import React, {Component} from 'react'
import './index.css'

import PropTypes from "prop-types"

export default class Item extends Component {
    render() {
        const {text} = this.props;
        return(
            <button className="mainFrame">{text}</button>
        );
    }
}

Item.propTypes = {
    text: PropTypes.string,
}