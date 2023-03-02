import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react"; // {} bc its a module
import "./styles/partials/_global.scss"; // checked, it works
import videos from "../src/data/videos.json";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [videoList, setVideoList] = useState(videos);

  // const setVideoList = () => {

  // };
  return (
    <div className="content-holder">
      <Header />
      <Sidebar videoList={videoList} />
    </div>
  );
}

export default App;
