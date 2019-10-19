import React, { Component } from "react"
import Navbar from "../Navbar"
import SearchBar from "../SearchBar"
import CategoryItem from "../CategoryItem"

import Kupa from "../../static/kupa.png"
import Ajanda from "../../static/ajanda_temp.jpg"
import Is from "../../static/is_temp.PNG"
import Kalem from "../../static/kalem-temp.jpg"
import Sapka from "../../static/sapka-temp.PNG"
import Tshirt from "../../static/tshirt-temp.PNG"

import "./index.css"

export default class MainPage extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <Navbar />
        <SearchBar />
        <div className="category-item-container">
          <CategoryItem image={Kupa} text="Kupa" />
          <CategoryItem image={Ajanda} text="Ajanda" />
          <CategoryItem image={Is} text="İş Kıyafetleri" />
          <CategoryItem image={Kalem} text="Kalem" />
          <CategoryItem image={Sapka} text="Şapka" />
          <CategoryItem image={Tshirt} text="T-shirt" />
        </div>
      </div>
    )
  }
}
