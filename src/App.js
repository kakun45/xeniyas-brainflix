import "./App.scss";
import "./styles/partials/_global.scss"; // checked, it works
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react"; // {} bc its a module

import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
// components
import Header from "./components/Header/Header"; // to avoid double in here need index.js in each folder
import UploadPage from "./pages/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="content-holder">
        <Header />
        {/* when add Routs rander Pages in here under Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="404" element={<NotFoundPage />} />
          {/* this can be "everything" like a star: "*", handle it inside */}
          <Route path="/:videoId" element={<Home />} />
          {/* redirect people */}
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
