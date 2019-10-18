import React, { Component } from 'react'
import "./index.css"

export default class CategoryItem extends Component {
    render() {
        return(
            <div className="image-container"><img src={this.props.image} alt="kupa" className="image-main"/>

            </div>
        )
    }
}