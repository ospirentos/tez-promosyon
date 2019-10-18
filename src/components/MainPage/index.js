import React, {Component} from 'react'
import Navbar from "../Navbar"
import SearchBar from "../SearchBar"
import CategoryItem from "../CategoryItem"

import Kupa from "../../static/kupa.png"


import "./index.css"


export default class MainPage extends Component {
    render() {
        return(
            <div className="bodyContainer">
                <Navbar />
                <SearchBar />
                <div className="category-item-container">
                    <CategoryItem image={Kupa} />
                    <CategoryItem image={Kupa} />
                    <CategoryItem image={Kupa} />
                    <CategoryItem image={Kupa} />
                    <CategoryItem image={Kupa} />
                    <CategoryItem image={Kupa} />
                </div>
            </div>
        )
    }
}