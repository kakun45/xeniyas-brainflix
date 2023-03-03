import "./Sidebar.scss";
import NavCard from "../NavCard/NavCard";
import Hero from "../Hero/Hero";

/* filter out and provide into by id */
const Sidebar = (props) => {
  const selectVideo = (id) => {
    const featuredVideo = props.videoList.find((video) => video.id === id);
    props.setFeaturedVideo(featuredVideo);
  };
  // console.log(props.videoList);

  return (
    <div>
      <section className="sidebar">
        <h2 className="--faded">NEXT VIDEOS</h2>

        {/* change it when selected video and */}
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
