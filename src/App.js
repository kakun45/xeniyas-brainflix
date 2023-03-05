import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react"; // {} bc its a module
import "./styles/partials/_global.scss"; // checked, it works
import details from "./data/video-details.json";
import videos from "../src/data/videos.json"; // arr of obj
import Header from "./components/Header/Header"; // to avoid double in here need index.js in each folder
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Details from "./components/Details/Details";

function App() {
  const [videoList, setVideoList] = useState(videos);
  // put a featured video in a state to init it
  const [featuredVideo, setFeaturedVideo] = useState(details[0]); // maybe use an .id? but now, I want entire obj

  return (
    <div className="content-holder">
      <Header />
      {/* when add Routs rander Pages in here under Header */}
      <Hero featuredVideo={featuredVideo} />
      <section className="desktop-container">
        <Details featuredVideo={featuredVideo} />
        <hr className="divider-desktop" />
        <Sidebar
          videoList={videoList}
          setFeaturedVideo={setFeaturedVideo}
          featuredVideo={featuredVideo}
        />
      </section>
    </div>
  );
}

export default App;
