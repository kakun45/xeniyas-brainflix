import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import "./Header.scss";

import upload from "../../assets/images/icons/upload.svg";
import magnifyGlass from "../../assets/images/icons/search.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="brainflix logo"></img>

      <div className="search-container">
        <div className="search-parent">
          <input className="search" placeholder="Search" />
        </div>
        <div className="search__avatar--img"></div>
      </div>

      <button className="button">
        <img src={upload} className="button--upload"></img>
        UPLOAD
      </button>
    </header>
  );
}

export default Header;
