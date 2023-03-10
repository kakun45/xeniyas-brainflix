import { Link, useNavigate, Navigate } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import upload from "../../assets/images/icons/upload.svg";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* // todo: not navigating */}
      <Link onClick={() => navigate("/")}>
        <img className="logo" src={logo} alt="brainflix logo"></img>{" "}
      </Link>
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
