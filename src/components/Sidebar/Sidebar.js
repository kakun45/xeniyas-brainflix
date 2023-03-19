import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import NavCard from "../NavCard/NavCard";

/* filter out and provide into by id */
const Sidebar = ({ videoList, setFeaturedVideo, featuredVideo }) => {
  // useParams from a url
  const { videoId } = useParams();
  const navigate = useNavigate();

  // another useEffect() - GET when detects a change on a videoList
  useEffect(() => {
    const featuredVideoId = videoId || videoList[0]?.id;
    if (featuredVideoId) {
      axios
        .get(
          `http://localhost:8080/videos/${featuredVideoId}?api_key=876863b1-acf2-43bb-99af-da02cb98ad48`
        )
        .then((res2) => {
          // set State setFeaturedVideo with res obj
          setFeaturedVideo(res2.data);
        })
        .catch((err2) => {
          // if error response is 404, Navigate to /404
          if (err2.response.status === 404) {
            navigate("404");
            // can't put in here the component, bc we must return
            // <Navigate to="/404" />;
          }
        });
    }
  }, [videoList, videoId]);

  const selectVideo = (e, videoId) => {
    e.preventDefault();
    const featuredVideo = videoList.find((video) => video.id === videoId);
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
                <NavLink to={`/${video.id}`} className="card__link">
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
