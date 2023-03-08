import icon from "../../assets/images/icons/add_comment.svg";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";
import "./Details.scss";
import Comment from "../Comment/Comment";

function humane_date(date_str) {
  var time_formats = [
    [60, "just now"],
    [90, "1 minute"], // 60*1.5
    [3600, "minutes", 60], // 60*60, 60
    [5400, "1 hour"], // 60*60*1.5
    [86400, "hours", 3600], // 60*60*24, 60*60
    [129600, "1 day"], // 60*60*24*1.5
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [907200, "1 week"], // 60*60*24*7*1.5
    [2628000, "weeks", 604800], // 60*60*24*(365/12), 60*60*24*7
    [3942000, "1 month"], // 60*60*24*(365/12)*1.5
    [31536000, "months", 2628000], // 60*60*24*365, 60*60*24*(365/12)
    [47304000, "1 year"], // 60*60*24*365*1.5
    [3153600000, "years", 31536000], // 60*60*24*365*100, 60*60*24*365
    [4730400000, "1 century"], // 60*60*24*365*100*1.5
  ];

  var time = ("" + date_str).replace(/-/g, "/").replace(/[TZ]/g, " "),
    dt = new Date(),
    seconds = (dt - new Date(time) + dt.getTimezoneOffset() * 60000) / 1000,
    token = " ago",
    i = 0,
    format;

  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "";
  }

  while ((format = time_formats[i++])) {
    if (seconds < format[0]) {
      if (format.length == 2) {
        return format[1] + (i > 1 ? token : ""); // Conditional so we don't return Just Now Ago
      } else {
        return (
          Math.round(seconds / format[2]) +
          " " +
          format[1] +
          (i > 1 ? token : "")
        );
      }
    }
  }
  // overflow for centuries
  if (seconds > 4730400000)
    return Math.round(seconds / 4730400000) + " centuries" + token;

  return date_str;
}

const Details = ({ featuredVideo }) => {
  // Comments Section
  const commentsArr = featuredVideo.comments;
  // Timestamp is in ms since epoch
  const date = new Date(featuredVideo.timestamp).toLocaleDateString("en-US");
  const humanDate = humane_date(date); 
  //  const stream = featuredVideo.video; // no use?
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
            <img src={viewsIcon} className="main__viewsIcon" />{" "}
            {featuredVideo.views}
          </div>

          <div className="main__likes --faded">
            <img src={likesIcon} className="main__likesIcon" />{" "}
            {featuredVideo.likes}
          </div>
        </div>
      </div>
      <hr className="divider full-width" />
      <p className="main__description">{featuredVideo.description}</p>

      <section className="main__comments">
        <h3 className="main__comments-count --headline">
          {commentsArr.length} Comments
        </h3>

        <div className="main__join-conv">
          <div className="search__avatar--img --bottom"></div>
          <form className="main__form">
            <label className="comment__label --faded" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <div className="comments__input">
              <textarea
                className="comments__textarea"
                type="text"
                id="comment"
                placeholder="Add a new comment"></textarea>
              <br />
              <button className="button button-comment">
                <img src={icon} className="button--icon"></img>
                COMMENT
              </button>
            </div>
          </form>
        </div>

        <hr className="divider divider--first full-width" />

        <section className="comments">
          {commentsArr.map((commentObj) => {
            return (
              <Comment
                key={commentObj.id}
                commentObj={commentObj}
                humanDate={humanDate}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};
export default Details;
