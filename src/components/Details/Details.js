import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.scss";
import icon from "../../assets/images/icons/add_comment.svg";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import Comment from "../Comment/Comment";

function humane_date(timestamp) {
  const diff_sec = Date.now() / 1000 - timestamp / 1000;
  const diff_min = diff_sec / 60;
  const diff_hours = diff_min / 60;
  const diff_days = diff_hours / 24;
  const diff_months = diff_days / 30;
  const diff_years = diff_days / 365;
  if (diff_min < 1) {
    return `${diff_sec} seconds ago`;
    //
  } else if (diff_hours < 1) {
    return `${Math.round(diff_min)}  minutes ago`;
    //
  } else if (diff_days < 1) {
    return `${Math.round(diff_hours)} hours ago`;
    //
  } else if (diff_months < 1) {
    return `${Math.round(diff_days)} days ago`;
    //
  } else if (diff_years < 1) {
    return `${Math.round(diff_months)} months ago`;
    //
  } else {
    return `${Math.round(diff_years)} years ago`;
  }
}

const Details = ({ featuredVideo, setFeaturedVideo }) => {
  const [comment, setComment] = useState("");

  // Comments Section
  // const [comments, setComments] = useState(featuredVideo.comments); // for use of local track of state without reload of a page, but it needs to reload when id of path changes
  const ifFormValid = () => {
    // Check if the field is filled
    const x = comment.trim();
    return Boolean(x);
  };

  const isFormEmpty = () => {
    return !Boolean(comment);
  };

  useEffect(() => {
    ifFormValid();
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ifFormValid()) {
      // make an axios request to my backend to add the New comment
      function postUrl(id) {
        return `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=876863b1-acf2-43bb-99af-da02cb98ad48`;
      }

      let newComment = {
        name: "Anonymous Guest",
        comment: comment,
      };

      axios
        .post(postUrl(featuredVideo.id), newComment)
        .then((_res) => {
          axios
            .get(
              `https://project-2-api.herokuapp.com/videos/${featuredVideo.id}?api_key=876863b1-acf2-43bb-99af-da02cb98ad48`
            )
            .then((res) => {
              // setComments(res.data.comments); // works for comments on POST, no reload needed
              setFeaturedVideo({ ...res.data, newComment }); // use this for updating comments with reload on route id change
            })
            .catch((err) => console.err(err));
        })
        .catch((err) => console.err(err));
      alert("Comment added");
      setComment(""); // clear comment field
    } else {
      // add a class error instead
      alert("Failed to add a comment. You've an error in a comment");
    }
  };
  // set state with input field
  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  // Timestamp is in ms since epoch
  const date = new Date(featuredVideo.timestamp).toLocaleDateString("en-US");

  const humanDate = (timestamp) => {
    const date = humane_date(timestamp);
    return date;
  };

  return (
    <section className="main">
      <h1 className="main__title --headline">{featuredVideo.title}</h1>
      <hr className="divider --mobile" />
      <div className="main__subtitle">
        <div className="main__subtitle-child">
          <h2 className="main__channel">By {featuredVideo.channel}</h2>
          <p className="main__date --faded">{date}</p>
        </div>
        <div className="main__subtitle-child">
          <div className="main__views --faded">
            <img
              src={viewsIcon}
              className="main__viewsIcon"
              alt="views eye icon"
            />{" "}
            {featuredVideo.views}
          </div>

          <div className="main__likes --faded">
            <img
              src={likesIcon}
              className="main__likesIcon"
              alt="likes heart icon"
            />{" "}
            {featuredVideo.likes}
          </div>
        </div>
      </div>
      <hr className="divider full-width" />
      <p className="main__description">{featuredVideo.description}</p>

      <section className="main__comments">
        <h3 className="main__comments-count --headline">
          {featuredVideo.comments?.length} Comments
        </h3>

        <div className="main__join-conv">
          <div className="search__avatar--img --bottom"></div>
          <form className="main__form" onSubmit={handleSubmit}>
            <label className="comment__label --faded" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <div className="comments__input">
              <textarea
                className={`comments__textarea ${
                  ifFormValid() || isFormEmpty() ? "" : "error-state"
                }`}
                type="text"
                name="comment"
                placeholder="Add a new comment"
                onChange={handleChangeComment}
                value={comment}></textarea>
              <br />
              <button className="button button-comment">
                <img
                  src={icon}
                  className="button--icon"
                  alt="comment's icon"></img>
                COMMENT
              </button>
            </div>
          </form>
        </div>

        <hr className="divider divider--first full-width" />

        <section className="comments">
          {featuredVideo.comments?.map((commentObj) => {
            return (
              <Comment
                key={commentObj.id}
                commentObj={commentObj}
                humanDate={humanDate(commentObj.timestamp)}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};
export default Details;
