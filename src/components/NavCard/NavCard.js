import "./NavCard.scss";

const NavCard = (props) => {
  //   const title = props.title;
  //   const channel = props.channel;
  //   const image = props.image;
  // console.log("title: ", title)

  return (
    <div className="card">
      <a
        onClick={(e) => props.clickHandler(e, props.title)}
        className="card__link"
        href={`/${props.title}`}></a>
      <img className="card__img" src={props.image}></img>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__channel">by {props.channel}</p>
    </div>
  );
};

export default NavCard;
