import "./Upload.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";

const UploadPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <hr className="upload--full-width" />
      <section className="upload">
        <h1 className="upload__title --headline">Upload Video</h1>
        <hr className="divider divider-tablet" />
        <div className="upload__box">
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
            </div>
          </form>
        </div>
        <hr className="divider" />

        <div className="upload__buttons">
          <button
            onClick={() => {
              alert("File is uploaded!");
              navigate("/"); // after allert click => go home
            }}
            className="button button-comment">
            <img src={logo} className="button--icon" alt="publish icon"></img>
            PUBLISH
          </button>
          <button className="button--cancel">CANCEL</button>
        </div>
      </section>
    </>
  );
};
export default UploadPage;
