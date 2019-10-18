import React, {Component} from 'react'
import "./index.css"
import Logo from "../../static/logo.png"
import InstagramLogo from "../../static/instagram.png"
import Item from "./components/Item"

export default class Navbar extends Component{
    render() {
        return (
            <div className="mainContainer">
                <img src={Logo} alt="websitelogo" className="logo" ></img>
                <div className="itemContainer">
                    <Item text="Anasayfa"/>
                    <Item text="Ürünler"/>
                    <Item text="İletişim"/>
                </div>
                <div className="contactsContainer">
                    <img src={InstagramLogo} alt="instagramLogo" className="instagramLogo"></img>
                    <div className="phoneNumber">+90 536 294 4457</div>
                    <div className="phoneNumber">0 212 426 5665</div>
                    <div className="phoneNumber">info@tezpromosyon.com</div>
                </div>
                
            </div>
        );
    }
}