import React, { Component } from "react"
import Navbar from "../Navbar"
import "./index.css"
import Button from "../Button"

export default class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: "None"
    }
  }
  render() {
    console.log(this.state.activePage)
    return (
      <div>
        <Navbar type="admin" />
        <div className="admin-page-main-container">
          <div className="admin-page-options-container">
            <ul>
              <li
                className="admin-page-option"
                onClick={() => {
                  this.setState({ activePage: "kategoriler" })
                }}
              >
                Kategoriler
              </li>
              <li
                className="admin-page-option"
                onClick={() => {
                  this.setState({ activePage: "urunler" })
                }}
              >
                Ürünler
              </li>
            </ul>
          </div>
          <div className="admin-page-configuration-container">
            <Button />
          </div>
        </div>
      </div>
    )
  }
}
