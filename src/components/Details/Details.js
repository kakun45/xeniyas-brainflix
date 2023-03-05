import icon from "../../assets/images/icons/add_comment.svg";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import "./Details.scss";
import Comment from "../Comment/Comment";

const Details = ({ featuredVideo }) => {
  // Comments Section
  const comments_cnt = featuredVideo.comments.length;

  // Timestamp is in ms since epoch
  const date = new Date(featuredVideo.timestamp).toLocaleDateString("en-US");
  const stream = featuredVideo.video; // "https://project-2-api.herokuapp.com/stream"
  return (
    <section className="main">
      <h1 className="main__title --headline">{featuredVideo.title}</h1>
      <hr className="divider --mobile" />
      <div className="main__subtitle">
        <div className="main__subtitle-child">
          <h2 className="main__channel ">By {featuredVideo.channel}</h2>
          <p className="main__date --faded">{date}</p>
        </div>
        <div className="main__subtitle-child">
          <div className="main__views --faded">
            <img src={viewsIcon} className="main__viewsIcon" />{" "}
            {featuredVideo.views}
          </div>

          <div className="main__likes --faded">
            <img src={likesIcon} className="main__likesIcon" />{" "}
            {featuredVideo.likes}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <p className="main__description">{featuredVideo.description}</p>

      <section className="main__comments">
        <h3 className="main__comments-count --headline">
          {comments_cnt} Comments
        </h3>

        <div className="main__join-conv">
          <div className="search__avatar--img --bottom"></div>
          <form className="main__form">
            <label className="comment__label --faded" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__textarea"
              type="text"
              // name=""
              id="comment"
              placeholder="Add a new comment"></textarea>
            <br />
            <button className="button comment-button">
              <img src={icon} className="button--icon"></img>
              COMMENT
            </button>
          </form>
        </div>

        <hr className="divider divider--first" />

        <section className="comments">
          <img className="default-avatar" />
          <Comment />
        </section>
        <div className="default-comments"></div>
      </section>
    </section>
  );
};
export default Details;
