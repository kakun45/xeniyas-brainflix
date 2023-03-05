import details from "../../data/video-details.json";
import "./Sidebar.scss";
import NavCard from "../NavCard/NavCard";

/* filter out and provide into by id */
const Sidebar = (props) => {
  const selectVideo = (id) => {
    const featuredVideo = details.find((video) => video.id === id);
    props.setFeaturedVideo(featuredVideo);
  };

  return (
    <div>
      <section className="sidebar">
        <h2 className="--faded --headline">NEXT VIDEOS</h2>

        {/* change list it when video selected  */}
        <ul className="card__child-holder">
          {props.videoList
            .filter((vid) => vid.id !== props.featuredVideo.id)
            .map((video) => (
              <li
                key={video.id}
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
