import "./Comment.scss";

const Comment = ({ commentObj, humanDate }) => {

  return (
    // WARNING! Must be inside a fragment, for a <hr> divider being a full width
    <>
      <div className="comments__child">
        <div className="comments__avatar"></div>
        <div className="comments__contentHolder">
          <div className="comments__titleHolder">
            <h3 className="comments__author">{commentObj.name}</h3>
            <p className="comments__date --faded">{humanDate}</p>
          </div>
          <div className="comments__text">{commentObj.comment}</div>
        </div>
      </div>
      <hr className="divider divider--first full-width" />
    </>
  );
};

export default Comment;
