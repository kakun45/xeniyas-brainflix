import "./App.scss";
import "./styles/partials/_global.scss"; // checked, it works
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react"; // {} bc its a module

import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/NotFound";
// components
// import Details from "./components/Details/Details";
import Header from "./components/Header/Header"; // to avoid double in here need index.js in each folder
// import Hero from "./components/Hero/Hero";
// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="content-holder">
        <Header />
        {/* when add Routs rander Pages in here under Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/:videoId" element={<Home />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
