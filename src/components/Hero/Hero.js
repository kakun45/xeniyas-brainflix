import "./Hero.scss";
// import details from... ??

const Hero = ({ featuredVideo }) => {
  return (
    <div className="hero">
      <div className="hero-contaier">
        <img className="hero-img" src={featuredVideo.image} />
      </div>
    </div>
  );
};

export default Hero;
