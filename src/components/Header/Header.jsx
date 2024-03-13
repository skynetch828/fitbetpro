import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo_image from '../../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveMenuItem = (url) => {
    const curUrl = location.pathname.replaceAll("/","");
    
    if (url === curUrl) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <div className={"page-header page" + location.pathname.replaceAll("/","-")}>
      <div className="container flex justify-between items-center mx-auto px-4 py-4">
        <span className="logo" onClick={(e) => {navigate("/", {replace: true})}}>
          <img className="logo-image" src={logo_image} alt="" />
        </span>
        <nav className="main-nav">
          <ul>
            <li className={"menu-item " + isActiveMenuItem("team")} onClick={(e) => {navigate("/team", {replace: true})}}>Team</li>
            <li className={"menu-item " + isActiveMenuItem("how-it-works")} onClick={(e) => {navigate("/how-it-works", {replace: true})}}>How it works</li>
            <li className={"menu-item " + isActiveMenuItem("roadmap")} onClick={(e) => {navigate("/roadmap", {replace: true})}}>Roadmap</li>
            <li className={"menu-item " + isActiveMenuItem("sneak-peek")} onClick={(e) => {navigate("/sneak-peek", {replace: true})}}>Sneak peek</li>
            <li className={"menu-item " + isActiveMenuItem("whitepaper")} onClick={(e) => {navigate("/whitepaper", {replace: true})}}>Whitepaper</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
