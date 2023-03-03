import "./NavCard.scss";

const NavCard = (props) => {

  return (
    <div className="card">
      <a
        onClick={(e) => props.clickHandler(e, props.title)}
        className="card__link"
        href={`/${props.title}`}></a>
      <div className="card__img">
        <img className="card__img" src={props.image}></img>
      </div>

      <div className="card__text">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__channel">by {props.channel}</p>
      </div>
    </div>
  );
};

export default NavCard;
