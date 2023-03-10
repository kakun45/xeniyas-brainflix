import "./Upload.scss";
import logo from "../../assets/images/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <hr className="divider full-width" />
      <section className="upload">
        <h1 className="upload__title --headline">Upload Video</h1>
        <div className="upload__hero-parent">
          <p className="--faded">VIDEO THUMBNAIL</p>
          <img
            src={videoPreview} 
            className="upload__img"
            alt="bike controls"></img>
        </div>

        <form className="upload__form">
          <label className="comment__label --faded" htmlFor="title">
            TITLE YOUR VIDEO
          </label>

          <div className="comments__input">
            <textarea
              className="comments__title"
              type="text"
              id="title"
              placeholder="Add a title to your video"></textarea>

            <label className="comment__label --faded" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="comments__textarea"
              type="text"
              id="description"
              placeholder="Add a description to your video"></textarea>
            <br />
            <button
              onClick={() => {
                alert("File is uploaded!");
                navigate("/"); // after that => go home
              }}
              className="button button-comment">
              <img src={logo} className="button--icon"></img>
              PUBLISH
            </button>
            <button className="button--cancel">CANCEL</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default UploadPage;
