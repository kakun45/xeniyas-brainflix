import axios from "axios";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import NavCard from "../NavCard/NavCard";
import "./Sidebar.scss";
const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

/* filter out and provide info by id */
const Sidebar = ({ videoList, setFeaturedVideo, featuredVideo }) => {
  // useParams gets an ID from a url
  const { videoId } = useParams();
  const navigate = useNavigate();

  // useEffect() sends .GET when detects a change on a videoList, & link
  useEffect(() => {
    const featuredVideoId = videoId || videoList[0]?.id;
    if (featuredVideoId) {
      axios
        .get(`${API_URI}/videos/${featuredVideoId}?api_key=${API_KEY}`)
        .then((res2) => {
          // set State setFeaturedVideo with res obj
          setFeaturedVideo(res2.data);
        })
        .catch((err2) => {
          // to avoid * if error response is 404, Navigate to /404
          if (err2.response.status === 404) {
            console.log("The id doesn't exist");
            navigate("404");
          }
        });
    }
    // eslint-disable-next-line
  }, [videoList, videoId]);

  // Scroll Up the top of the page when detect the featuredVideo change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [featuredVideo]);

  return (
    <div>
      <section className="sidebar">
        <h2 className="--faded --headline">NEXT VIDEOS</h2>

        {/* change list to exclude a featuredVideo selection */}
        <ul className="card__child-holder">
          {videoList
            .filter((vid) => vid.id !== featuredVideo.id)
            .map((video) => (
              <li key={video.id} className="card__child">
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
