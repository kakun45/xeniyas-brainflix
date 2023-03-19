import "./NavCard.scss";

const NavCard = ({ title, channel, image }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          className="card__img"
          src={image}
          alt={`preview of video titled as: ${title}`}></img>
      </div>

      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__channel">by {channel}</p>
      </div>
    </div>
  );
};

export default NavCard;
