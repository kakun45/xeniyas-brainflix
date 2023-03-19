import axios from "axios";
import { useEffect, useState } from "react";
import Details from "../../components/Details/Details";
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  // sets a featured video in a state to init it
  const [featuredVideo, setFeaturedVideo] = useState({});

  // get initial non-detailed arr of videos on Mount
  useEffect(() => {
    axios
      .get(`${API_URI}/videos?api_key=${API_KEY}`)
      .then((res) => {
        setVideoList(res.data);
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
