import "./Comment.scss";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="default-avatar"></div>
      <div className="comment__title">{props.title}</div>
      <div className="comment__date">{props.date}</div>
      <div className="comment__text">{props.text}</div>
    </div>
  );
};
export default Comment;
