import "./Hero.scss";

const Hero = ({ featuredVideo }) => {
  return (
    <div className="hero">
      <div className="hero-contaier">
        <video
          controls
          className="hero-img"
          poster={featuredVideo.image}
          // source
          // todo: in next sprint src={featuredVideo.video}
        ></video>
      </div>
    </div>
  );
};

export default Hero;
