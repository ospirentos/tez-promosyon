import React, { Component } from "react"
import "./index.css"
import SearchLogo from "../../static/search.png"

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-main-container">
        <input
          placeholder="Aranacak kelimeyi giriniz..."
          className="searchbar-main"
        />
        <div className="searchbar-logo-container">
          <img src={SearchLogo} alt="search-bar-logo" className="searchbar-logo" />
        </div>
      </div>
    )
  }
}
