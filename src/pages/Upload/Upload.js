import "./Upload.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
const API_URI = process.env.REACT_APP_API_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

const UploadPage = () => {
  const navigate = useNavigate();
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoDescription, setNewVideoDescription] = useState("");

  const handleChangeTitle = (e) => {
    setNewVideoTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setNewVideoDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newVideo = {
      title: newVideoTitle,
      description: newVideoDescription,
    };

    const postURL = `${API_URI}upload?api_key=${API_KEY}`;

    axios
      .post(postURL, newVideo)
      .then((res) => {
        // console.log(res.data);
        alert("File is uploaded!");
        return navigate("/"); // updates the sidebar on mount on Home
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          <form className="upload__form" onSubmit={handleSubmit}>
            <label className="comment__label --faded" htmlFor="title">
              TITLE YOUR VIDEO
            </label>

            <div className="comments__input">
              <textarea
                className="comments__title"
                type="text"
                name="title"
                placeholder="Add a title to your video"
                onChange={handleChangeTitle}
                value={newVideoTitle}></textarea>

              <label className="comment__label --faded" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="comments__textarea"
                type="text"
                id="description"
                placeholder="Add a description to your video"
                onChange={handleChangeDescription}
                value={newVideoDescription}></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <hr className="divider" />

        <div className="upload__buttons">
          <button
            // onClick={() => {
            // handleUpload();
            // set state on change
            // navigate("/"); // after allert click => go home
            // }}
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
