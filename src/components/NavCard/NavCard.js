import "./NavCard.scss";

const NavCard = ({ title, channel, image }) => {
  return (
    <div className="card">
      <a className="card__link" href={`${image}`}></a>
      <div className="card__img">
        <img className="card__img" src={image}></img>
      </div>

      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__channel">by {channel}</p>
      </div>
    </div>
  );
};

export default NavCard;
