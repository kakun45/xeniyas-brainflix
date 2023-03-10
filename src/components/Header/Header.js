import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import upload from "../../assets/images/icons/upload.svg";

function Header() {
  return (
    <header className="header">
      {/* // todo: not navigating */}
      <Link to="/">
        <img className="logo" src={logo} alt="brainflix logo"></img>{" "}
      </Link>
      <div className="search-parent">
        <div className="search-container">
          <input className="search" placeholder="Search" />
        </div>
        <div className="search__avatar--img"></div>
        <Link to="upload" className="search__link">
          <button className="button button-upload">
            <img
              src={upload}
              alt="upload button"
              className="button--icon"></img>
            UPLOAD
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
