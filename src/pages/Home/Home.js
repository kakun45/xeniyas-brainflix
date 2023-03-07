import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Details from "../../components/Details/Details";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  // put a featured video in a state to init it
  const [featuredVideo, setFeaturedVideo] = useState({}); // maybe use an .id? but now, I want entire obj

  const videoId = useParams();
  console.log(videoId);
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=876863b1-acf2-43bb-99af-da02cb98ad48"
      )
      .then((res) => {
        console.log("get was called. res:", res.data);
        const videoList = res.data;
        // get a video by id with a specific rec
        setVideoList(res.data); // arr
      })
      .catch((err) => console.log(err));
  }, []);

  // another useeffect() - GET when detects a change on a videoList
  useEffect(() => {
    const featuredVideoId = videoList[0]?.id;
    if (featuredVideoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${featuredVideoId}?api_key=876863b1-acf2-43bb-99af-da02cb98ad48`
        )
        .then((res2) => {
          console.log(res2.data);
          // set state
          setFeaturedVideo(res2.data);
          // console.log(featuredVideo);
        })
        .catch((err2) => console.log(err2));
    }
  }, [videoList]); // useParams

  return (
    <>
      <Hero featuredVideo={featuredVideo} />
      <section className="desktop-container">
        {Object.keys(featuredVideo).length > 0 ? (
          <>
            <Details featuredVideo={featuredVideo} />
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
