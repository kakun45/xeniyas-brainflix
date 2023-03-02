const ContentCard = (props) => {
  const title = props.title;
  const author = props.author;

  return (
    <div className="card">
      <img className="card__img"></img>
      <h3 className="card__title">{title}</h3>
      <p className="card__channel">{author}</p>
    </div>
  );
};
export default ContentCard;
