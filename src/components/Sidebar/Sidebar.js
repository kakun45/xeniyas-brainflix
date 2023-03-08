import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import axios from "axios";
import "./Sidebar.scss";
// import details from "../../data/video-details.json";
import NavCard from "../NavCard/NavCard";

/* filter out and provide into by id */
const Sidebar = ({ videoList, setFeaturedVideo, featuredVideo }) => {
  // useParams
  const { videoId } = useParams();
  console.log(videoId);
  // another useEffect() - GET when detects a change on a videoList
  useEffect(() => {
    const featuredVideoId = videoId || videoList[0]?.id;
    if (featuredVideoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${featuredVideoId}?api_key=876863b1-acf2-43bb-99af-da02cb98ad48`
        )
        .then((res2) => {
          console.log(res2.data);
          // set state with res obj
          setFeaturedVideo(res2.data);
        })
        .catch((err2) => console.log(err2));
    }
  }, [videoList, videoId]);

  const selectVideo = (e, videoId) => {
    e.preventDefault();
    const featuredVideo = videoList.find((video) => video.id === videoId);
    console.log(featuredVideo);
    setFeaturedVideo(featuredVideo);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [featuredVideo]);

  return (
    <div>
      <section className="sidebar">
        <h2 className="--faded --headline">NEXT VIDEOS</h2>

        {/* change list it when video selected  */}
        <ul className="card__child-holder">
          {videoList
            .filter((vid) => vid.id !== featuredVideo.id)
            .map((video) => (
              <li
                key={video.id}
                onClick={(e) => selectVideo(e, video.id)}
                // navLink use here, watch a link for id on change
                className="card__child">
                <NavLink to={`/${video.id}`}>
                  <NavCard
                    id={video.id}
                    title={video.title}
                    channel={video.channel}
                    image={video.image}
                  />
                </NavLink>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
