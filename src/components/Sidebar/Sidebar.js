import "./Sidebar.scss";
import NavCard from "../NavCard/NavCard";

const Sidebar = (props) => {
  const selectVideo = (id) => {
    const featuredVideo = props.videoList.find((video) => video.id === id);
    props.setFeaturedVideo(featuredVideo);
  };

  // props.videoList.map((obj) => {
  //   const title = obj.title;
  //   const channel = obj.channel;
  //   const image = obj.image;
  //   console.log(obj);
  // });

  return (
    <section className="sidebar">
      <h2>NEXT VIDEOS</h2>
      <ul>
        {props.videoList.map((video) => (
          <li className="card__child">
            <NavCard
              title={video.title}
              channel={video.channel}
              image={video.image}
            />{" "}
          </li>
        ))}

        {/* {props.videoList.map((video) => (
          <li key={video.id} onClick={() => selectVideo(video.id)}>
            {video.title} 
             ))} */}
      </ul>
    </section>
  );
};

export default Sidebar;
