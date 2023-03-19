import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
import UploadPage from "./pages/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="content-holder">
        <Header />
        {/* Routs must rander Pages under the <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="404" element={<NotFoundPage />} />
          {/* /:videoId can be "everything" like a star: "*", handle it inside */}
          <Route path="/:videoId" element={<Home />} />
          {/* redirect "everything" else to 404 */}
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
