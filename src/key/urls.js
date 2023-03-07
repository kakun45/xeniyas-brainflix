// import axios from "axios";
import key from "./key.json";

// const getKey = "https://project-2-api.herokuapp.com/register";
// // need a responce to parse this request, works, but don't use it it doen't persist
// axios
//   .get(getKey)
//   .then((res) => {
//     const getVideos =
//   "https://project-2-api.herokuapp.com/videos" + "?api_key=" + res.data.api_key}
//   )
//   .catch((err) => console.log(err));

export default getVideos;
"https://project-2-api.herokuapp.com/videos" + "?api_key=" + key.api_key;

export const getFeaturedVideo = (videoId) => {
  return (
    "https://project-2-api.herokuapp.com/videos/" +
    videoId +
    "?api_key=" +
    key.api_key
  );
};
