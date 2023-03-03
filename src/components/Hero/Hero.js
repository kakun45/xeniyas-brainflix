import "./Hero.scss";
// import details from... ??

const Hero = ({ featuredVideo }) => {
  return (
    <div className="hero">
      <img className="hero-img" src={featuredVideo.image} />
    </div>
  );
};

export default Hero;
