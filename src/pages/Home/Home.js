import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Details from "../../components/Details/Details";
import Sidebar from "../../components/Sidebar/Sidebar";
const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  // put a featured video in a state to init it
  const [featuredVideo, setFeaturedVideo] = useState({}); // maybe use an .id? but now, I want entire obj

  useEffect(() => {
    axios
      .get(`${API_URI}videos?api_key=${API_KEY}`)
      .then((res) => {
        // get a video by id with a specific rec
        // console.log("GET on Home was called");
        setVideoList(res.data); // arr
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Hero featuredVideo={featuredVideo} />
      <section className="desktop-container">
        {Object.keys(featuredVideo).length > 0 ? (
          <>
            <Details
              featuredVideo={featuredVideo}
              setFeaturedVideo={setFeaturedVideo}
            />
            <hr className="divider-desktop" />
          </>
        ) : (
          ""
        )}

        <Sidebar
          videoList={videoList}
          setFeaturedVideo={setFeaturedVideo}
          featuredVideo={featuredVideo}
        />
      </section>
    </>
  );
};

export default Home;
