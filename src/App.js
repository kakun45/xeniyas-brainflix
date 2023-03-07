import "./App.scss";
import "./styles/partials/_global.scss"; // checked, it works
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; // {} bc its a module

// import details from "./data/video-details.json";
// import videos from "../src/data/videos.json"; // arr of obj
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
// components
import Details from "./components/Details/Details";
import Header from "./components/Header/Header"; // to avoid double in here need index.js in each folder
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {


  return (
    <div className="content-holder">
      <Header />
      {/* when add Routs rander Pages in here under Header */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:videoId" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <section className="desktop-container"> */}
          {/* <Details featuredVideo={featuredVideo} /> */}
          {/* <hr className="divider-desktop" />
              <Sidebar
                videoList={videoList}
                setFeaturedVideo={setFeaturedVideo}
                featuredVideo={featuredVideo}
              />
            </section> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
