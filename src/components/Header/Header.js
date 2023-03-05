import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./Header.scss";

import upload from "../../assets/images/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="brainflix logo"></img>

      <div className="search-parent">
        <div className="search-container">
          <input className="search" placeholder="Search" />
        </div>
        <div className="search__avatar--img"></div>
        <button className="button button-upload">
          <img src={upload} className="button--icon"></img>
          UPLOAD
        </button>
      </div>
    </header>
  );
}

export default Header;
