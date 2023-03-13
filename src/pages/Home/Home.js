import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Details from "../../components/Details/Details";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  // put a featured video in a state to init it
  const [featuredVideo, setFeaturedVideo] = useState({}); // maybe use an .id? but now, I want entire obj

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=876863b1-acf2-43bb-99af-da02cb98ad48"
      )
      .then((res) => {
        // get a video by id with a specific rec
        setVideoList(res.data); // arr
      })
      .catch((err) => console.log(err));
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
