import { useEffect } from "react";
import "./Sidebar.scss";
// import details from "../../data/video-details.json";
import NavCard from "../NavCard/NavCard";

/* filter out and provide into by id */
const Sidebar = ({ videoList, setFeaturedVideo, featuredVideo }) => {
  const selectVideo = (id) => {
    const featuredVideo = videoList.find((video) => video.id === id);
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
                // navLink use here, watch a link for id on change
                onClick={() => selectVideo(video.id)}
                className="card__child">
                <NavCard
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                />{" "}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
